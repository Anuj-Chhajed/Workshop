import { Note } from "../models/note.model";

export class NoteRepository {

  create(data: any) {
    return Note.create(data);
  }

  findById(id: string) {
    return Note.findById(id);
  }

  findAll(filter: any, options: any) {
    return Note.find(filter, null, options);
  }

  update(id: string, data: any) {
    return Note.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string) {
    return Note.findByIdAndDelete(id);
  }
}
