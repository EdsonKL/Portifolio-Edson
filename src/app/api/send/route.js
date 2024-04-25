// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {name, email, subject,message} = await req.json();
    try {
      const data = await resend.emails.send({
        from: `${name} <${fromEmail}>`,
        to: ["edson.mendes.palhares@gmail.com"],
        subject: subject,
        react: (
          <>
          <p>Email: {email}</p>
            <p>Mensagem: {message}</p>
          </>
        ),
      });

      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
}
