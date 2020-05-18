const express = require("express")
const app = express()
const port = 3000
const {
  getData,
  postData,
  putData,
  patchData,
  deleteData,
  wrongRoute,
} = require("./methods")
const { getBody } = require("./middleware")

app.use("*", (req, res, next) => getBody(req, res, next))
app.get("/get", (req, res) => getData(req, res))
app.post("/post", (req, res) => postData(req, res))
app.put("/put", (req, res) => putData(req, res))
app.patch("/patch", (req, res) => patchData(req, res))
app.delete("/delete", (req, res) => deleteData(req, res))
app.all("*", (req, res) => wrongRoute(req, res))

app.listen(port)
