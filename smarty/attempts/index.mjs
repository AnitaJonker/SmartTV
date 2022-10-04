// // import express from "express"
// // import morgan from "morgan"
// // import cors from "cors"
// // import dotenv from "dotenv"
// // import bodyParser from "body-parser"
// // import path from "path"
// // import fetch from "node-fetch"
// // import request from "http"
// // import response from "express"
// // import { createApi } from "unsplash-js"
// // import nodeFetch from "node-fetch"
// // import toJson from "unsplash-js"
// // global.fetch = fetch

// const app = express()
// const port = 5000
// app.use(cors())
// app.use(morgan("common"))
// app.use(bodyParser.json())

// app.listen(port, () => {
//   console.log(`Listening on 5000 http://localhost:${port}`)
// })

// const unsplash = createApi({
//   accessKey: "process.env.REACT_APP_UNSPLASH_API_KEY",
//   fetch: nodeFetch,
// })

// app.post("/api/searchTerms", (req, res) => {
//   //res.json(unsplash)
//   let { userRequest } = req.body
//   userRequest.user = userRequest.tolowerCase()
//   unsplash.search
//     .photos(userRequest, 1, 20)
//     .then(toJson)
//     .then((json) => res.status(200).send(json))
//     .catch((err) => {
//       res.status(500).send(err.message)
//       console.log({ "Something went wrong": err })
//     })
// })

// // const serverApi = createApi({
// //   accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
// // })

// // app.post("/api", (req, res) => {
// //   res.send(unsplash)
// //   // let { userRequest } = req.body
// //   // userRequest.user = userRequest.tolowerCase()
// //   // unsplash.search
// //   //   .photos(userRequest, 1, 20)
// //   //   .then(toJson)
// //   //   .then((json) => res.status(200).send(json))
// //   //   .catch((err) => {
// //   //     res.status(500).send(err.message)
// //   //     console.log({ "Something went wrong": err })
// //   //   })
// // })

// app.get("/api", (req, res) => {
//   res.json(unsplash)
//   let { userRequest } = req.body
//   // userRequest.user = userRequest.tolowerCase()
//   // unsplash.search
//   //   .photos(userRequest, 1, 20)
//   //   .then(toJson)
//   //   .then((json) => res.status(200).send(json))
//   //   .catch((err) => {
//   //     res.status(500).send(err.message)
//   //     console.log({ "Something went wrong": err })
//   // })
// })

// // app.post("/api/searchTerms", (req, res) => {
// //   let { userRequest } = req.body
// //   userRequest.user = userRequest.tolowerCase()
// //   unsplash.search
// //     .photos(userRequest, 1, 20)
// //     .then(toJson)
// //     .then((json) => res.status(200).send(json))
// //     .catch((err) => {
// //       res.status(500).send(err.message)
// //       console.log({ "Something went wrong": err })
// //     })
// // })

// // import { createApi } from "unsplash-js"
// // import fetch from "node-fetch"
// // import express from "express"
// // import nodeFetch from "node-fetch"
// // import "whatwg-fetch"
// // import cors from "cors"

// // // import { URL } from "url"
// // global.fetch = fetch
// // const app = express()
// // let products = [
// //   { name: "television", price: 112.34, brand: "samsung" },
// //   { name: "washing machine", price: 345.34, brand: "LG" },
// //   { name: "Macbook", price: 3454.34, brand: "Apple" },
// // ]

// // const unsplash = createApi({
// //   accessKey: `${process.env.REACT_APP_UNSPLASH_API_KEY}`,
// //   fetch: nodeFetch,
// // })

// // const browserApi = createApi({
// //   apiUrl: "localhost:8000/api",
// //   //...other fetch options
// // })

// // // handle get request
// // app.use(cors())
// // app.get("/api", (request, response) => {
// //   const accessKey = { accessKey: `${process.env.REACT_APP_UNSPLASH_API_KEY}` }
// //   response.json(accessKey)
// // })

// // app.get("/products", (request, response) => {
// //   // send back a response in plain text
// //   response.json(products)
// // })

// // // start the server
// // app.listen(5000, () => console.log("Server listening on port 5000."))

// // // handle get request for fetching products
// // // belonging to a particular brand
// // app.get("/products/:brand", (request, response) => {
// //   // read the captured value of route parameter named: brand
// //   const brand = request.params.brand

// //   console.log(`brand ${brand} `)

// //   const productsFiltered = products.filter((product) => product.brand === brand)

// //   response.json(productsFiltered)
// // })
// // // // Express route handler with URL: '/products' and a handler function
// // // app.get("/products", (request, response) => {
// // //   // Make the GET call by passing a config object to the instance
// // //   axios({
// // //     method: "get",
// // //     url: "http://localhost:3002/products",
// // //   }).then((apiResponse) => {
// // //     // process the response
// // //     const products = apiResponse.data
// // //     response.json(products)
// // //   })
// // // })
// // //app.listen(3002, () => console.log(`Server is running on port ${PORT}`))

// // // import { createApi } from "unsplash-js"
// // // import nodeFetch from "node-fetch"
// // // import { createApi } from "unsplash-js"
// // // const PORT = 8000
// // // const createApi = require("unsplash-js")

// // // const cors = require("cors")

// // // require("dotenv").config()

// // // // URL = require("url").URL
// // // const express = require("express")
// // // const axios = require("axios")
// // // const app = express()
// // // app.use(cors())

// // // app.post("/api", async (req, res) => {
// // //   const username = "someUsername"
// // //   const password = "somePassword"

// // //   const newProduct = { userName: username, password: password }
// // //   axios({
// // //     method: "post",
// // //     url: "http://localhost:8000/api",
// // //     data: newProduct,
// // //     headers: { Authorization: "XXXXXX" },
// // //   }).then((apiResponse) => {
// // //     const products = apiResponse.data
// // //     console.log("Hi")
// // //     res.json(products)
// // //   })
// // // })

// // // app.get("/api/:productName", (request, response) => {
// // //   const productName = request.params.productName

// // //   axios.get(`http://localhost:api/${userName}`).then((apiResponse) => {
// // //     const product = apiResponse.data
// // //     response.json(product)
// // //   })
// // // })
