import cookie from "cookie";

const usuarios = {
  111: "111",
  111: "111"
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { usuario, password } = req.body;

  if (usuarios[usuario] !== password) {
    return res.status(401).end();
  }

  res.setHeader("Set-Cookie", cookie.serialize("session", "ok", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    path: "/"
  }));

  res.status(200).end();
}
