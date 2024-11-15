require("dotenv").config()
require("./db/connection")
const axios = require("axios")

const express = require("express")

const port = 5001 

const app = express()

app.get("/health", (req, res) => {
    res.status(201).json({message: "API is working"})
})

app.use(express.json())

// API endpoint
const apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar';
const apiKey = '99cb2a3f356e4af691546725f3ad8711'; // Replace with your actual API key

app.get('/getRecipes', async (req, res) => {

    try {
        // Make a GET request
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        console.log(response.data)
        res.send(response.data);
    } catch (error) {
        // Handle error
        res.status(error.response ? error.response.status : 500).send({
            message: 'Error fetching data',
            error: error.response ? error.response.data : error.message
        });
    }
});

app.listen(port, () =>
    console.log( `Server is running on ${port}`)
)