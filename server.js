const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/evaluate", async (req, res) => {
  const { question, answer } = req.body;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `Evaluate this junior accountant interview answer:\n\nQuestion: ${question}\n\nAnswer: ${answer}\n\nReturn Score (1–5), Feedback, and Suggestion.`
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GEMINI_API_KEY", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    res.json({ evaluation: reply });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
