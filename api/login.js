export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { usuario, password } = req.body;

  const usuarios = {
    admin: "ceyinfadm",
    informatica: "ceyinfadm"
  };

  if (usuarios[usuario] === password) {
    res.status(200).json({ ok: true });
  } else {
    res.status(401).json({ error: "No autorizado" });
  }
}


