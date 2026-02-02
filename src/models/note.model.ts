import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: String,
  content: String,
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
  status: { type: String, enum: ["active", "archived"], default: "active" }
}, { timestamps: true });

export const Note = mongoose.model("Note", NoteSchema);
