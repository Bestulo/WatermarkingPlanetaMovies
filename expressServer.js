const express = require("express");
const app = express();
const { drawWatermarkAsBuffer } = require("./usingcanvas");

// url 1 = https://image.tmdb.org/t/p/original//m03jul0YdVEOFXEQVUv6pOVQYGL.jpg
// url 2 = ./AstroPeliculas.png

/**const drawWatermarkAsBuffer = async (
  pathOfSourceImageFile,
  pathOfWaterMarkImageFile,
  width,
  height
) => Buffer */

app.get("/", async (req, res) => {
  // grab url as https://website.com/?url=https://image.tmdb.org/t/p/original//m03jul0YdVEOFXEQVUv6pOVQYGL.jpg
  const url = req.query.url;
  if (url) {
    const buffer = await drawWatermarkAsBuffer(
      // "https://image.tmdb.org/t/p/original//m03jul0YdVEOFXEQVUv6pOVQYGL.jpg",
      url,
      "./AstroPeliculas.png",
      1280,
      720
    );
    res.send(buffer);
  } else {
    res.send(
      '<h1 style="font-size: 120px;font-family:sans-serif;">No url provided hehehe</h1>'
    );
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log("App launched on http://localhost:" + port + "/")
);
