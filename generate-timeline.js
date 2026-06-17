export default async function handler(req, res) {
  const { url } = req.body;

  res.status(200).json({
    ok: true,
    result: {
      brand: "Demo",
      industry: "Demo",
      audience: "Demo",
      timelines: {
        cyberpunk2099: { name: "Cyberpunk", hero: { headline: "Cyberpunk Version" } },
        swissBrutalist: { name: "Brutalist", hero: { headline: "Brutalist Version" } },
        retro1998: { name: "Retro", hero: { headline: "Retro Version" } },
        luxuryTech: { name: "Luxury", hero: { headline: "Luxury Version" } },
        ghiblistyle: { name: "Ghibli", hero: { headline: "Ghibli tyle" } }
      }
    }
  });
}
