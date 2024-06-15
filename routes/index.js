import express from "express";
import { notes, addNote, removeNote } from "../persistence.js";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { 
    title: "YANT (Yet another Note Taking app)",
    notes: notes(),
  });
});

export default router;
