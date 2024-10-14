const Tesseract = require("tesseract.js");
const sharp = require("sharp");
async function recognizeText(imagePath) {
  // 读取图片文件
  const imageBuffer = await sharp(imagePath).toBuffer();
  // 使用Tesseract OCR识别文字
  const {
    data: { text },
  } = await Tesseract.recognize(imageBuffer, "chi_sim");
  // 输出识别结果
  console.log(">>>>", text);
}
// 调用函数并传入图片路径
recognizeText("./assets/imgs/ocr.jpg");
