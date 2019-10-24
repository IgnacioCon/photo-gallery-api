import { Request, Response } from 'express';
import Photo from "../models/Photo"; //Import our Photo model
import path from "path";    //format path to photo in project
import fs from "fs-extra";  //used to delete photo

//Controller for Photo Routes

//GET all photos from the database
export async function getPhotos(req: Request, res: Response) {
    const photos = await Photo.find();
    return res.json(photos); 
}

//GET single Photo by ID
export async function getPhoto(req: Request, res: Response) {
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
}

//DELETE single Photo by ID
export async function deletePhoto(req: Request, res: Response) {
    const { id } = req.params;
    const photo = await Photo.findByIdAndDelete(id);
    if (photo) {
        //use fs to unlik the file, and path to obtain the direct path to the file
       await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Deleted photo',
        photo
    })
}

//POST and create new Photo in Database
export async function createPhoto(req: Request, res: Response) {

    const { title, description } = req.body;

    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    }

    const photo = new Photo(newPhoto);

    await photo.save();

    return res.json({
        message: 'Photo successfully saved!',
        photo
    })
}

//UPDATE photo by ID, updates fields
export async function updatePhoto(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedPhoto = await Photo.findByIdAndUpdate(id, {title, description}, {new: true});

    return res.json({
        message: 'Successfully updated!',
        updatedPhoto
    })

}