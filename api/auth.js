import cookie from "cookie";

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");

  if (cookies.session !== "ok") {
    return res.status(401).end();
  }

  res.status(200).end();
}
