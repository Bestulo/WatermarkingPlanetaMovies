const { createCanvas, loadImage } = require("canvas");

const drawWatermarkAsBuffer = async (
  pathOfSourceImageFile,
  pathOfWaterMarkImageFile,
  width,
  height
) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  ctx.globalAlpha = 1;

  // loading the source image file
  const loadSourceImage = await loadImage(pathOfSourceImageFile);
  // drawing the source file into canvas
  ctx.drawImage(loadSourceImage, 0, 0, width, height);
  ctx.globalAlpha = 0.5;
  const loadWatermarkImage = await loadImage(pathOfWaterMarkImageFile);
  // drawing the watermark image over the source image
  //                                x    y    w    h
  ctx.drawImage(loadWatermarkImage, 987, 427, 300, 300);
  return canvas.toBuffer();
};

module.exports = {
  drawWatermarkAsBuffer,
};
