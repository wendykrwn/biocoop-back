const express = require("express")
const cors = require("cors")
const app = express()
const routes = require("./route")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
