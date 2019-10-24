import express from 'express'; //framework for nodejs
import morgan from 'morgan'; //module to view requests in console
import path from 'path';    //module to resolve path issues

const app = express();

import indexRoutes from './routes/index';  //import our routes file

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

//Folder to hold images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
