# Handmate-OSC
Handmate-OSC implements the Google MediaPipe Hand model on the browser, getting the landmarks from two hands and outputting to OSC via UDP using the [osc.js library](https://github.com/adzialocha/osc-js#osc-js). UPDATE- there is an OFFLINE version available here: https://github.com/monlim/Handmate-OSC-Offline 

# Installation Guide for Beginners
You must have Node installed on your computer. If you don't, download the latest stable version [here](https://nodejs.org/en/). Launch the installer and install Node.

Download the Handmate-OSC code folder.

Open your terminal window on Mac (press CMD + spacebar simultaneously, in the search window, type in terminal and enter) or Command Prompt on Windows. Go to the folder where you downloaded MediaPipe-Hands-OSC. You can do this by just dragging the folder into the terminal winwdow and press enter. Or type in 'cd' followed by the path name. For example, if you put the folder on your desktop:

```$ cd desktop/Handmate-OSC/```

Install package dependencies (the files you will need to run the code) by typing in:

```$ npm install```

Mac users - If you get a permission error, try typing this instead and when terminal asks for a password, enter your administrator password:

```$ sudo npm install```

Then, run bridge.js to start the OSC link by typing:

```$ node bridge.js```

You should see a message 'osc success'. You must do this before opening the browser.

Go to http://127.0.0.1:5500/index.html OR https://monlim.github.io/Handmate-OSC/ on your browser. Start waving your hands around.

# Usage
UDP send on port 8080 and receive on port 9129.

Note: you will need another application to receive your OSC landmarks and process them. There is a MaxMSP patch example in the assets folder. Landmarks are prefixed as:

* /lx for Left Hand x-axis 
* /ly for Left Hand y-axis
* /rx for Right Hand x-axis
* /ry for Right Hand y-axis

This is a list of the landmarks (image provided by Google MediaPipe):

![Image provided by Google MediaPipe](https://monlim.github.io/MediaPipe-Hands-OSC/assets/Mediapipe_Hand_landmarks.png)

For more information on the hand-tracking model, please see [MediaPipe documentation](https://google.github.io/mediapipe/solutions/hands.html).
