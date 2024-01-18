import { createFFmpeg, fetchFile } from "ffmpeg.js";

const videoElement = document.getElementById("videoElement");

// 获取浏览器摄像头视频流
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    videoElement.srcObject = stream;

    // 初始化FFmpeg.js
    // const { createFFmpeg, fetchFile } = FFmpeg;
    const ffmpeg = createFFmpeg({ log: true });

    // 加载FFmpeg的WebAssembly模块
    const loadFFmpeg = async () => {
      await ffmpeg.load();
      ffmpeg.FS("writeFile", "input.mp4", await fetchFile(stream));

      // 使用FFmpeg.js将视频流转发到RTSP服务器
      const command = `-i input.mp4 -c copy -f rtsp rtsp://188.18.46.60:10900/stream`;
      await ffmpeg.run(command);

      console.log("FFmpeg command executed successfully.");
    };

    loadFFmpeg().catch((error) => {
      console.error("Error loading or executing FFmpeg command:", error);
    });
  })
  .catch((error) => {
    console.error("Error accessing camera:", error);
  });
