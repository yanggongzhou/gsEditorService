import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  id: String,
  characterName: String,
  characterIntro: String,
  bookId: String,
  sex: Number,
  mainCharacter: Number,
  dressUp: [
    {
      id: String,
      name: String,
      isDefault: {
        type: Number,
        default: 0,
      },
      skin: {
        id: String,
        url: String,
      },
      cloth: {
        id: String,
        url: String,
      },
      emotion: {
        id: String,
        url: String,
      },
      hair: {
        id: String,
        url: String,
      },
      backext: {
        id: String,
        url: String,
      },
    },
  ],
});
