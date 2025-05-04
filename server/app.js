const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const generateSummaryRoute = require('./routes/generateSummary')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Route for generating Gemini AI summary
app.use('/api/gemini', generateSummaryRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
