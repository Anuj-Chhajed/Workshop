import { Request, Response, NextFunction } from "express";
import { NoteService } from "../services/note.service";

const svc = new NoteService();

export class NoteController {

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const note = await svc.create(req.body);
      res.json(note);
    } catch (e) {
      next(e);
    }
  };

  getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const note = await svc.getOne(req.params.id as string);
      res.json(note);
    } catch (e) {
      next(e);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notes = await svc.getAll(req.query);
      res.json(notes);
    } catch (e) {
      next(e);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const note = await svc.update(req.params.id as string, req.body);
      res.json(note);
    } catch (e) {
      next(e);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const note = await svc.delete(req.params.id as string);
      res.json(note);
    } catch (e) {
      next(e);
    }
  };
}
