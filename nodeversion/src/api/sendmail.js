import sgMail from "@sendgrid/mail";
sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export async function get(page) {
      const msg = {
        to: 'whiten@newberry.org', // Change to your recipient
        from: 'postcards@newberry.org', // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      };
      console.log("Form submitted");
      const output = await sgMail.send(msg);
  return {
    body: output,
  };
}