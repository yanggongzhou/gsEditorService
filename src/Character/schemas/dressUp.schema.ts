import * as mongoose from 'mongoose';

export const DressUpSchema = new mongoose.Schema({
  id: String,
  name: String,
  isDefault: Number,
  skin: String,
  cloth: String,
  emotion: String,
  hair: String,
  backext: String,
});
