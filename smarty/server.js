const PORT = process.env.PORT || 5001
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const { response } = require("express")
require("dotenv").config()
const { createApi } = require("unsplash-js")
const app = express()
app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"))
}

app.get("/Topics", (req, res) => {
  const images = {
    method: "GET",
    url: `https://api.unsplash.com/topics/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
    param: {
      per_page: 20,
    },
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

app.get("/Photos", (req, res) => {
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

// const express = require("express")
// const morgan = require("morgan")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const path = require("path")
// const fetch = require("node-fetch")
// const { createApi } = require("unsplash-js")
// const { toJSon } = require("unsplash-js")
// const axios = require("axios")
// global.fetch = fetch

// const app = express()
// const port = 5000
// require("dotenv").config()

// app.use(cors())
// app.use(morgan("common"))
// app.use(express.static(path.join(__dirname, "../public")))

// app.use(bodyParser.json())

// app.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`)
// })

// const unsplash = createApi({
//   accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
// })

// app.post("/api/searchTerms", (req, res) => {
//   //res.json(unsplash)
//   let { userRequest } = req.body
//   userRequest.user = userRequest.tolowerCase()
//   unsplash.search
//     .photos(userRequest, 1, 20)
//     .then((json) => res.status(200).send(json))
//     .catch((err) => {
//       res.status(500).send(err.message)
//       console.log({ "Something went wrong": err })
//     })
// })}
//`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`

// app.get("/", (req, res) => {
//   const images = {
//     method: "GET",
//     url: `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`,
//   }
//   axios
//     .get(images)
//     .then((response) => {
//       res.json(response.data)
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// })
