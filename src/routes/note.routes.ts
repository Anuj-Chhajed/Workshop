import { Router } from "express";
import { NoteController } from "../controllers/note.controller";

const router = Router();
const c = new NoteController();

router.post("/", c.create);
router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

export default router;
