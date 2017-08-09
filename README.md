# Doctor Lookup

#### Allows user to find local doctors

#### By Dylan Lewis

## Description

The user can enter symptoms they are experiencing or diseases they may already have and find local doctors with the ability to treat them.

## Specs
1. The program must request a successful API call given the users input
2. The program must parse the the API call into usable data
3. The program must display the returned data to the user

## Prerequisites
Node.js must be installed to use and set up this program. If you do not yet have it installed, you can find a tutorial here:
https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js
You must also have bower installed https://www.learnhowtoprogram.com/javascript/modern-js-apps/introducing-bower
In addition you must generate your own API key from https://developer.betterdoctor.com/

## Setup/Installation Requirements


* Locate repository on github https://github.com/dyldlewis/doctor-lookup
* Copy the link to the github repository
* Open terminal on your computer
* In terminal do the following:
  * Enter your desktop using 'cd desktop'
  * type 'git clone (repository url)'
  * type 'cd doctor-lookup' to access the new directory
  * create an .env file ($ mkdir .env)
  * Open the .env file and input the following text: export apiKey = "your_api_key_here"; (it should be noted that your apikey variable name must be the same as in the example, it is case sensitive. Your API key itself should also be enclosed by one set of quotes).
  * Next, install the required dependencies:
    * $ npm install
    * $ bower install
* $ gulp build (for safe measure)
* $ gulp serve (to start the server and view your web page!)



## Known Bugs

There are no known bugs.

## Support and contact details

For support email Dylan at dyldlewis@gmail.com.

## Technologies Used

HTML/CSS, Jquery, javaScript, browserify, gulp, node.js, bower, jshint, vinyl-source-stream

### License

MIT

Copyright (c) 2016 **Dylan Lewis**
