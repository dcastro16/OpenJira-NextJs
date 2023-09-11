import { Entry, EntryStatus } from "@/interfaces";
import mongoose, { Model, Schema } from "mongoose";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: [
        EntryStatus.PENDING,
        EntryStatus.IN_PROGRESS,
        EntryStatus.COMPLETED,
      ],
      message: "{VALUE} no es un estado permitido.",
    },
    required: true,
  },
});

//   status: {
//     type: String,
//     enum: {
//       values: ["PENDING", "IN_PROGRESS", "COMPLETED"],
//       message: "{VALUE} no es un estado permitido.",
//     },
//     required: true,
//   },

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
