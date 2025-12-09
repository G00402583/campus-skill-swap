import express from "express";
import Member from "../models/Member.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const member = new Member(req.body);
    const savedMember = await member.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(400).json({ message: "Could not create member", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch members" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch member" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(updatedMember);
  } catch (error) {
    res.status(400).json({ message: "Could not update member", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json({ message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ message: "Could not delete member" });
  }
});

export default router;
