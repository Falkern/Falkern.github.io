const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/send-message", (req, res) => {
  const { name, email, message } = req.body;
  const payload = {
    content: `New contact form submission:\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
  };

  fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        res.status(200).send("Message sent successfully!");
      } else {
        res.status(500).send("Failed to send message.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Failed to send message.");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
