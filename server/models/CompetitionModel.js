import mongoose from "mongoose";

const competitionSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
});

const CompetitionModel = mongoose.model("CompetitionModel", competitionSchema);

export default CompetitionModel;
