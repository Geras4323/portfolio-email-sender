const express = require('express');

const EmailService = require('../services/email.service');


const router = express.Router();
const service = new EmailService();

router.post('/send-emails', async (req, res) => {
  try {
    const { email, message } = req.body;
    await service.sendNotificationEmail(email, message);
    await service.sendConfirmationEmail(email);
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;