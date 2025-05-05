const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const dotenv = require('dotenv')
dotenv.config()
const router = express.Router()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
// console.log('Loaded API Key:', process.env.GEMINI_API_KEY)

router.post('/generate-summary', async (req, res) => {
  const { prompt } = req.body

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
    const result = await model.generateContent(prompt)
    const summary = result.response.text()
    res.json({ summary })
  } catch (error) {
    console.error('Error generating summary:', error)
    res.status(500).json({ error: 'Failed to generate summary' })
  }
})

module.exports = router
