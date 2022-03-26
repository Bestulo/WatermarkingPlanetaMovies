// watermark engine
const watermark = require("purejswatermark/packages/watermark");
// express
import express from "express";

const getImageWatermark = async (image: string) => {
  const imageWithWatermark = await watermark.addWatermark(
    "https://image.tmdb.org/t/p/original//qndvrOXGyoOxkhc12SqfLi9Hr31.jpg",
    "https://previews.123rf.com/images/imagecatalogue/imagecatalogue1611/imagecatalogue161109122/65462363-cool-text-rubber-seal-stamp-watermark-tag-inside-rectangular-shape-with-grunge-design-and-unclean-te.jpg"
  );
  return imageWithWatermark;
};

const app = express();

app.get("/", async (req: any, res: any) => {
  const image = await getImageWatermark(
    "https://image.tmdb.org/t/p/original//qndvrOXGyoOxkhc12SqfLi9Hr31.jpg"
  );
  res.send(image);
});
export {};
