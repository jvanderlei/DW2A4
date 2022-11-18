import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d6961e37fa515",
      pass: "7fa34492f6fc17"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Projeto SPA <oi@projetospa.com>",
      to: "Johnata <Professor@gmail.com>",
      subject: subject,
      html: body
    });
  }
}
