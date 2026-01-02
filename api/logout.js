import cookie from "cookie";

export default function handler(req, res) {
  res.setHeader("Set-Cookie", cookie.serialize("session", "", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    path: "/",
    maxAge: 0
  }));

  res.status(200).end();
}
