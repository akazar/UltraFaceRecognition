const {
  cv,
  getDataFilePath,
  drawBlueRect,
  grabFramesCam
} = require('./utils');

const devicePort = 0;
const delay = 3000;

const cap = new cv.VideoCapture(devicePort);
// const cap = new cv.VideoCapture(videoFile);
let done = false;
var intvl = setInterval(() => {
	let frame = cap.read();
	// loop back to start on end of stream reached
	if (frame.empty) {
	  cap.reset();
	  frame = cap.read();
	}
	cv.imwrite('./face_folder/img.png', frame);

	const key = cv.waitKey(delay);
	done = key !== -1 && key !== 4;
	if (done) {
	  clearInterval(intvl);
	  console.log('Key pressed, exiting.');
	}
}, delay);

