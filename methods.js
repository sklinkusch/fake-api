exports.getData = (req, res) => {
  const { headers, body } = req
  res
    .status(200)
    .json({ data: { headers, message: "The GET request is working" } })
}

exports.postData = (req, res) => {
  const { headers, body } = req
  res
    .status(200)
    .json({ data: { headers, body, message: "The POST request is working" } })
}

exports.putData = (req, res) => {
  const { headers, body } = req
  res
    .status(200)
    .json({ data: { headers, body, message: "The PUT request is working" } })
}

exports.patchData = (req, res) => {
  const { headers, body } = req
  res
    .status(200)
    .json({ data: { headers, body, message: "The PATCH request is working" } })
}

exports.deleteData = (req, res) => {
  const { headers, body } = req
  res
    .status(200)
    .json({ data: { headers, message: "The DELETE request is working" } })
}

exports.wrongRoute = (req, res) => {
  res.status(404).json({ error: { message: "The endpoint is not existing" } })
}
