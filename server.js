const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { form_name, email, phone, no_of_persons, preferred_food, occasion } = req.body;

  if (!form_name || !email) {
    return res.status(400).send('Name and email are required');
  }

  console.log("Form submission received:");
  console.log({
    form_name,
    email,
    phone,
    no_of_persons,
    preferred_food,
    occasion
  });

  res.send(`<h1>Form Submitted Successfully.</h1><p>Thank you <strong>${form_name}</strong>, your message has been recorded.</p>`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DineSphere server running on port ${PORT}`));
