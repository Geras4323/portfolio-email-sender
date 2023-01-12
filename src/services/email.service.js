const { sendEMail } = require('../utils/mails/nodemailer');


class EmailService {
  constructor() {}

  async sendNotificationEmail(email, message) {
    const emailInfoForMe = {
      to: process.env.OWNERS_EMAIL,
      subject: `Message from ${email} - Portfolio`,
      html: `
        <div>
          <p>The following message was sent from ${email}</p>
          <p>${message}</p>
        </div>
      `,
    }
    const returnMessage = 'Notification mail sent successfully'
    const sent = await sendEMail(emailInfoForMe, returnMessage);
    return sent;
  }

  async sendConfirmationEmail(email) {
    const emailInfoForUser = {
      to: email,
      subject: `Message Confirmation - Geras4323`,
      html: `
        <div>
          <h3>Thank you very much for reaching out!</h3>
          <p>Your message has been successfully sent.</p>
          <p>I will be writing back to you as soon as I can.</p>
        </div>
      `,
    }
    const returnMessage = 'Confirmation mail sent successfully'
    const sent = await sendEMail(emailInfoForUser, returnMessage);
    return sent;
  }
}

module.exports = EmailService;