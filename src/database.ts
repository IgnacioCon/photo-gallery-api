import { connect } from 'mongoose';

//Connection to our database, we use mongoose
export async function startConnection(): Promise<void> {
     await connect('mongodb://localhost/photo-gallery-db', {
         useNewUrlParser: true,
         useFindAndModify: false
     });
     console.log('Database is connected');
}
