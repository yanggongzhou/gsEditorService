import * as mongoose from 'mongoose';

export const MaterialSchema = new mongoose.Schema({
  id: String,
  materialName: String,
  materialType: Number,
  materialUrl: String,
});
