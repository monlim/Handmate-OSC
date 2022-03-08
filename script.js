const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const canvasCtx = canvasElement.getContext("2d");
var osc = new OSC();
osc.open(); //connect by default to ws://localhost.8080

//draw pose Landmarks on screen;
function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );
  if (results.multiHandLandmarks && results.multiHandedness) {
    for (let index = 0; index < results.multiHandLandmarks.length; index++) {
      const classification = results.multiHandedness[index];
      const isRightHand = classification.label === "Right";
      const landmarks = results.multiHandLandmarks[index];
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: isRightHand ? "#fff" : "#056df5",
      }),
        drawLandmarks(canvasCtx, landmarks, {
          color: isRightHand ? "#fff" : "#056df5",
          fillColor: isRightHand ? "#056df5" : "#fff",
          radius: (x) => {
            return lerp(x.from.z, -0.15, 0.1, 10, 1);
          },
        });
      if (isRightHand === false) {
        let leftX = landmarks.map((val) => val.x);
        let leftY = landmarks.map((val) => val.y);
        var messageLeftX = new OSC.Message("/lx/", ...leftX);
        var messageLeftY = new OSC.Message("/ly/", ...leftY);
        osc.send(messageLeftX);
        osc.send(messageLeftY);
      } else {
        let rightX = landmarks.map((val) => val.x);
        let rightY = landmarks.map((val) => val.y);
        var messageRightX = new OSC.Message("/rx/", ...rightX);
        var messageRightY = new OSC.Message("/ry/", ...rightY);
        osc.send(messageRightX);
        osc.send(messageRightY);
      }
    }
    canvasCtx.restore();
  }
}

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.3/${file}`;
  },
});

hands.setOptions({
  selfieMode: true,
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 1280,
  height: 720,
});
camera.start();
