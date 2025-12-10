import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true },
    title: { type: String, required: true },
    descriptionText: { type: String, required: true },
    skillTag: { type: String, required: true },
    rateType: { type: String, enum: ["per_hour", "per_project", "free"], required: true },
    priceValue: { type: Number },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Offer = mongoose.model("Offer", offerSchema);

export default Offer;