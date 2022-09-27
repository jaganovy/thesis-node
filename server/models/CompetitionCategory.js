import mongoose from "mongoose";

const competitionCategorySchema = mongoose.Schema({
    name: String,
    backgroundPhoto: Buffer
    
})

const CompetitionCategory = mongoose.model('CompetitionCategorySchema', competitionCategorySchema)

export default CompetitionCategory 