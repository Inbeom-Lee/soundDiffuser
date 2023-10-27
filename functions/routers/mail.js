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

    const {
      uid: uidRequest,
      email,
      timeRequested,
      musicPurpose,
      musicMood,
      listReference,
    } = dataRequest;

    const splitEmail = email.split("@");
    const getEmailID = splitEmail[0];
    const splitAddress = splitEmail[1].split(".");
    const getAddress1 = splitAddress[0];
    const getAddress2 = splitAddress[1];

    const getDate = new Date(timeRequested).toLocaleDateString("ko-kr");
    const getPurpose = musicPurpose?.join(", ");
    const getMood = musicMood?.join(", ");
    const arrayReference = listReference && Object.values(listReference);
    const htmlReference = arrayReference
      ?.map((data, i) => {
        const { snippet, dataEdit } = data;
        const { title } = snippet;
        const { speed, style, timing, mood, clarity, temperature } =
          dataEdit || {};
        const checkEdit = (data) => {
          const getCalc = Number(data);
          return getCalc < 0 ? getCalc : `+${getCalc}`;
        };

        return `
        <label>참고 레퍼런스 음악 ${i + 1}</label>
        <p>${title}</p>
        <p>
          속도 ${checkEdit(speed)}&nbsp;/&nbsp; 스타일 ${checkEdit(style)}
          &nbsp;/&nbsp; 박자 ${checkEdit(timing)}&nbsp;/&nbsp; 무드
          ${checkEdit(mood)}&nbsp;/&nbsp; 명확도 ${checkEdit(clarity)}
          &nbsp;/&nbsp; 온도 ${checkEdit(temperature)}
        </p>
      `;
      })
      .join("");

    const mailOptions = {
      from: `사운드디퓨저 <"developer@riif.co.kr">`,
      to: email,
      subject: "[사운드디퓨저]문의 등록 완료",
      html: `<!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Content</title>
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .underline {
              text-decoration: underline;
              color: #fff;
              pointer-events: none;
            }
            .background {
              display: flow-root;
              position: relative;
              padding: 0 150px;
              width: 1024px;
              background-color: #414141;
            }
            #title1 {
              margin: 50px 0 35px;
              font-size: 24px;
              color: #fff;
            }
            #title2 {
              margin: 0;
              margin-right: 60px;
              font-size: 24px;
              color: #fff;
            }
            #linkButton {
              display: block;
              margin: 50px 0 35px;
              width: 380px;
              height: 52px;
              line-height: 52px;
              text-align: center;
              font-weight: 700;
              font-size: 22px;
              color: #fff;
              text-decoration: none;
              background-color: #002C77;
              border-width: 0.5px;
              border-style: solid;
              border-color: #fff;
              border-radius: 18px;
            }
            #flexBoxWrapper {
              display: flow-root;
              padding: 0 35px;
              width: 1024px;
              background-color: #414141;
            }
            #flexBox {
              display: flex;
              align-items: end;
              padding: 55px 115px 25px;
              border-top: 1px solid #fff;
              border-bottom: 1px solid #ADADAD;
            }
            #flexBoxTitle {
              font-weight: 700;
              font-size: 22px;
            }

            .subText {
              margin-top: 8px;
              margin-right: 60px;
              height: 28px;
              font-weight: 600;
              font-size: 18px;
              color: #ADADAD;
            }

            label {
              display: block;
              margin: 40px 0 20px;
              font-weight: 700;
              font-size: 18px;
              line-height: 25px;
              color: #fff;
            }
            p {
              margin: 0;
              font-size: 18px;
              font-weight: 500;
              line-height: 28px;
              color: #fff;
            }

            #emailLogo {
              margin-left: 700px;
            }
            #emptyBox {
              width: 100%;
              height: 40px;
            }
          </style>
      </head>
      <body>
          <div class="background">
              <h1 id="title1">
                <span class="underline">${getEmailID}<span>@</span>${getAddress1}<span>.</span>${getAddress2}</span> 님의 의뢰가 접수되었습니다.
              </h1>
              <p>안녕하세요. 사운드디퓨저입니다.</p>
              <p>고객님이 의뢰하신 내용이 정상적으로 접수되었습니다.</p>
              <p>2~3일내로 담당PM이 연락드리겠습니다.</p>
              <a id="linkButton" href="https://sounddiffuser.co.kr/historyRequest/info">의뢰내역 바로 가기</a>
          </div>
          <div id="flexBoxWrapper">
            <div id="flexBox">
              <h2 class="underline" id="title2">의뢰 요구사항 보기</h2>
              <p class="subText">${getDate}</p>
              <p class="subText">${uidRequest}</p>
            </div>
          </div>
          <div class="background">
            <label>의뢰 목적</label>
            <p>${getPurpose}</p>
            ${htmlReference}
            <label>제작 컨셉</label>
            <p>${getMood}</p>
            <img id="emailLogo" src="https://firebasestorage.googleapis.com/v0/b/sounddiffuser-4e8ae.appspot.com/o/emailLogo.png?alt=media&token=396e0e82-6c6a-4b0e-ae8b-efaaad0a56cd&_gl=1*138i86x*_ga*MTA2MjQ1NzIzNS4xNjgyOTI0Nzky*_ga_CW55HF8NVT*MTY5ODEwOTg3My43MTIuMS4xNjk4MTEwNzI0LjUyLjAuMA.."/>
            <div id="emptyBox"></div>
          </div>
      </body>
      </html>
      `,
    };

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });
    const result = await transporter.sendMail(mailOptions);

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
