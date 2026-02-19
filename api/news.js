// /api/news.js
export default async function handler(req, res) {
  const category = req.query.category || "general";
  const API_KEY = process.env.GNEWS_API_KEY; // secret key

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&lang=en&apikey=${API_KEY}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
