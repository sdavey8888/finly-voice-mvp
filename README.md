# Finly Voice Assessment MVP

This is a basic MVP for a web-based voice interview system for Finly, using browser mic, transcript, and Gemini API.

## Setup

1. Replace `YOUR_GEMINI_API_KEY` in `server.js` with your actual Gemini API key.
2. Run the server:
```bash
npm install express body-parser node-fetch
node server.js
```
3. Open `index.html` in a browser.

This records a voice input, converts it to text (simulated), and sends to Gemini for evaluation.
