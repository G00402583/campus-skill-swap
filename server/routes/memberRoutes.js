import express from "express";
import Member from "../models/Member.js";

const router = express.Router();

// Create a member
router.post("/", async (req, res) => {
  try {
    const member = new Member(req.body);
    const saved = await member.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not create member", error: error.message });
  }
});

// List members with optional filters
// GET /api/members?courseName=...&studyYear=3&skill=fitness
router.get("/", async (req, res) => {
  try {
    const { courseName, studyYear, skill } = req.query;

    const filter = {};

    if (courseName) {
      // case-insensitive match on course name
      filter.courseName = new RegExp(courseName, "i");
    }

    if (studyYear) {
      filter.studyYear = Number(studyYear);
    }

    if (skill) {
      // member has this skill in their skills array
      filter.skills = skill;
    }

    const members = await Member.find(filter)
      .sort({ fullName: 1, createdAt: -1 })
      .lean();

    res.json(members);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch members", error: error.message });
  }
});

// Get single member by id
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id).lean();
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(member);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch member", error: error.message });
  }
});

// (Optional) update member – not used heavily in UI but good for completeness
router.put("/:id", async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(updated);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not update member", error: error.message });
  }
});

// (Optional) delete member
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Member.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json({ message: "Member deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not delete member", error: error.message });
  }
});

export default router;
