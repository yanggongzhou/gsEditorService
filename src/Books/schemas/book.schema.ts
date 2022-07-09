import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  id: String,
  bookName: String,
  bookIntro: String,
  bookCover: String,
});
