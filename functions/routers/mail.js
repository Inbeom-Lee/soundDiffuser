const express = require("express");
const router = express.Router();
const nodeMailer = require("nodemailer");

router.post("/send", async (req, res) => {
  try {
    const { apiKey, dataRequest } = req.body;

    if (apiKey !== process.env.API_KEY)
      return res.status(403).send("API KEY가 잘못되었습니다.");
    if (!dataRequest)
      return res.status(403).send("dataRequest가 잘못되었습니다.");

    const { uid: uidRequest, email } = dataRequest;

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    const mailOptions = {
      from: `사운드디퓨저 <"developer@riif.co.kr">`,
      to: email,
      subject: "[사운드디퓨저]문의 등록 완료",
      html: `
        <div>
          <h4>사운드디퓨저</h4>
          <p>문의가 성공적으로 등록되었습니다.</p>
          <p>문의번호: ${uidRequest}</p>
        </div>
      `,
    };
    const result = await transporter.sendMail(mailOptions);

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
