import mongoose from "mongoose";

const competitionCategorySchema = mongoose.Schema({
  name: String,
  backgroundPhoto: Buffer,
});

const CompetitionCategoryModel = mongoose.model(
  "CompetitionCategorySchema",
  competitionCategorySchema
);

export default CompetitionCategoryModel;
