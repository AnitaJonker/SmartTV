// const express = require("express")
// const app = express()
// const cors = require("cors")
// const router = express.Router()
// require("dotenv").config()

// // Define middleware for all routes
// app.use((request, response, next) => {
//   console.log(request)
//   next()
//   cors()
//   express()
// })

// let products = [
//   { name: "television", price: 112.34, brand: "samsung" },
//   { name: "washing machine", price: 345.34, brand: "LG" },
//   { name: "Macbook", price: 3454.34, brand: "Apple" },
// ]

// router.get("/", (request, response) => {
//   response.json("hi there")
// })

// // handle get request for fetching products
// // belonging to a particular brand
// app.get("/products/:brand", (request, response) => {
//   // read the captured value of route parameter named: brand
//   const brand = request.params.brand

//   console.log(`brand ${brand} `)

//   const productsFiltered = products.filter((product) => product.brand == brand)
//   response.send("waaazaa")
//   response.json(productsFiltered)
// })
// app.listen(4000, () => console.log(`Server listening on port 4000.`))

// // import axios from "axios"

// // // ... somewhere in code
// // // Get api-key from server
// // const username = "someUsername"
// // const password = "somePassword"
// // axios
// //   .post("localhost:8000", {
// //     username,
// //     password,
// //   })
// //   .then((res) => {
// //     axios.defaults.headers["x-api-key"] = res.data.apiKey
// //   })
// //   .catch((err) => console.log(err))
// // ...

// // ... somewhere else in code
// // axios
// //   .get("http://example.com/secure-endpoint")
// //   .then((res) => console.log(res.data))
// //   .catch((err) => console.log(err))
// // // ...

// //using unsplash
// // r
// // const server = express()
// // server.use(cors())
// // server.photos.get(
// //   { photoId: "123" },
// //   // `fetch` options to be sent only with _this_ request
// //   { headers: { "X-Custom-Header-2": "bar" } }
// // )

// // // in the browser
// // const browserApi = createApi({
// //   apiUrl: "https://mywebsite.com/unsplash-proxy",
// //   //...other fetch options
// // })
// // const serverApi = createApi({
// //   accessKey: "MY_ACCESS_KEY",
// //   //...other fetch options
// // })

// // const urlBuilder = function buildUrl(url,pathname) {
// //   return URL.format({
// //     protocol: "https:",
// //     hostname: url,
// //     port: PORT,
// //     pathname,
// //     accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
// //     query: {
// //       limit: 100,
// //       offset: 0
// //     }
// // }

// //On the localhost homepage

// // app.get("/", async (req, res) => {
// //   axios
// //     .get("/user", {
// //       params: {
// //         ID: 12345,
// //       },
// //     })
// //     .then(function (response) {
// //       // handle success
// //       console.log(response)
// //     })
// //     .catch(function (error) {
// //       // handle error
// //       console.log(error)
// //     })
// //     .then(function () {
// //       // always executed
// //     })
// // })

// // app.get("/", (req, res) => {
// //   const userUrl = ""
// //   let content = null

// //   const images = {
// //     method: "GET",
// //     url: `https://api.unsplash.com/photos/?client_id`,
// //   }

// //   // axios.post(userUrl, content, (req, res) => {
// //   //   auth: "password"
// //   // })

// //   // axios
// //   //   .get(images)
// //   //   .then((response) => {
// //   //     res.json(response.data)
// //   //   })
// //   //   .catch((error) => {
// //   //     console.error(error)
// //   //   })
// // })
