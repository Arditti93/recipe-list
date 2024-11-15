const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },

})

const Recipe = mongoose.model("recipe", recipeSchema)

module.exports = Recipe