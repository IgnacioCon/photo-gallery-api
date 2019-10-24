import { Schema, Document ,model, } from 'mongoose';

//Creates a new schematic for the model to be saved in database
const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

//interface to validate Photo fields
interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

//exports models using interface
export default model<IPhoto>('Photo', schema);

