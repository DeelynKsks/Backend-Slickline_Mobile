import { connect } from 'mongoose';

export const connectDB = async (uri, database) => {
  try {
    const db = await connect(uri, {
      dbName: database
    });
    console.log(`Connected to ${db.connection.name} database`);
  } catch (error) {
    console.log(error);
  }
};
