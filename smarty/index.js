const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const { response } = require("express")
require("dotenv").config()

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  const images = {
    method: "GET",
    url: `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  }

  axios
    .request(images)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
