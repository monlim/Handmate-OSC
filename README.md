# MediaPipe-Hands-OSC
MediaPipe-Hands-OSC implements the Google MediaPipe Hand model on the browser, getting the landmarks from two hands and outputting to OSC via UDP using the [osc.js library](https://github.com/adzialocha/osc-js#osc-js).

# Installation Guide for Beginners
You must have Node installed on your computer. If you don't, download the latest stable version [here](https://nodejs.org/en/). Launch the installer and install Node.

Download the MediaPipe-Hands-OSC code folder.

Open your terminal window on Mac(press CMD + spacebar simultaneously, in the search window, type in terminal and enter) or Command Prompt on Windows. Go to the folder where you downloaded MediaPipe-Hands-OSC. You can do this by just dragging the folder into the terminal winwdow and press enter. Or type in 'cd' followed by the path name. For example, if you put the folder on your desktop:

```$ cd desktop/MediaPipe-Hands-OSC/```

Install package dependencies (the files you will need to run the code on Node) by typing in:

```$ npm install```

If you get a permission error, try typing this instead and when terminal asks for a password, enter your administrator password:

```$ sudo npm install```

Then, run bridge.js to start the OSC link by typing:

```$ node bridge.js```

Recommended installation via npm: npm i osc-js or yarn add osc-js.

Import the library const OSC = require('osc-js') or add the script lib/osc.js or lib/osc.min.js (minified version) for usage in a browser.

# Usage
Please use Google Chrome or Firefox on a Desktop. Will not work in Safari. UDP send on port 8080 and receive on port 9129.
