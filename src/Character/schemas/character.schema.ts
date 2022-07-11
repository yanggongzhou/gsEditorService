import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  id: String,
  characterName: String,
  characterIntro: String,
  bookId: String,
  sex: Number,
  mainCharacter: Number,
  dressUp: {
    skinId: String,
    clothId: String,
    emotionId: String,
    hairId: String,
    backextId: String,
  },
});
