import * as mongoose from 'mongoose';

export const ChapterSchema = new mongoose.Schema({
  id: String,
  chapterName: String,
  chapterIntro: String,
  bookId: String,
});
