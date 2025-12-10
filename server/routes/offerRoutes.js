import express from "express";
import Offer from "../models/Offer.js";
import Member from "../models/Member.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const member = await Member.findById(req.body.memberId);
    if (!member) {
      return res.status(400).json({ message: "Invalid memberId" });
    }

    const offer = new Offer(req.body);
    const savedOffer = await offer.save();
    res.status(201).json(savedOffer);
  } catch (error) {
    res.status(400).json({ message: "Could not create offer", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { skillTag, minPrice, maxPrice, isActive, memberId } = req.query;

    const filter = {};

    if (memberId) {
      filter.memberId = memberId;
    }

    if (skillTag) {
      filter.skillTag = skillTag;
    }

    if (isActive === "true") {
      filter.isActive = true;
    }

    if (isActive === "false") {
      filter.isActive = false;
    }

    if (minPrice || maxPrice) {
      filter.priceValue = {};
      if (minPrice) {
        filter.priceValue.$gte = Number(minPrice);
      }
      if (maxPrice) {
        filter.priceValue.$lte = Number(maxPrice);
      }
    }

    const offers = await Offer.find(filter)
      .populate("memberId", "fullName courseName studyYear")
      .sort({ createdAt: -1 });

    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch offers" });
  }
});

router.get("/stats/skill-tags", async (req, res) => {
  try {
    const stats = await Offer.aggregate([
      { $group: { _id: "$skillTag", offerCount: { $sum: 1 } } },
      { $sort: { offerCount: -1 } },
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Could not calculate skill tag stats" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id).populate(
      "memberId",
      "fullName emailAddress courseName studyYear"
    );
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    res.json(offer);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch offer" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    res.json(updatedOffer);
  } catch (error) {
    res.status(400).json({ message: "Could not update offer", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    res.json({ message: "Offer deleted" });
  } catch (error) {
    res.status(500).json({ message: "Could not delete offer" });
  }
});

export default router;