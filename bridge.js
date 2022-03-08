const OSC = require("osc-js");

try {
  const config = { udpClient: { port: 9129 } };
  const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });

  osc.open(); // start a WebSocket server on port 8080
  console.log("osc success");
} catch (err) {
  console.log("osc error");
}
