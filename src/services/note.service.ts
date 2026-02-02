import { NoteRepository } from "../repositories/note.repository";
import { ApiError } from "../utils/ApiError";

export class NoteService {
  repo = new NoteRepository();

  async create(data: any) {
    if (!data.title) throw new ApiError(400, "Title is required");
    return this.repo.create(data);
  }

  async getOne(id: string) {
    const note = await this.repo.findById(id);
    if (!note) throw new ApiError(404, "Note not found");
    return note;
  }

  getAll(query: any) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 5;
    const skip = (page - 1) * limit;

    const filter: any = {};
    if (query.subject) filter.subject = query.subject;
    if (query.priority) filter.priority = query.priority;

    return this.repo.findAll(filter, {
      skip: skip,
      limit: limit,
      sort: { createdAt: -1 }
    });
  }

  update(id: string, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
