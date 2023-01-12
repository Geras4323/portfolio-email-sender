const express = require('express');

const EmailService = require('../services/email.service');


const router = express.Router();
const service = new EmailService();

router.post('/send-emails', async (req, res) => {
  try {
    const { email, message } = req.body;
    const messageNotification = await service.sendNotificationEmail(email, message);
    const messageConfirmation = await service.sendConfirmationEmail(email);
    res.status(200).send({
      message: {
        notification: messageNotification,
        confirmation: messageConfirmation,
      }
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;