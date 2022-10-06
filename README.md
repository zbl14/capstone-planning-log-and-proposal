# Foodie Alliance

#### Foodie Alliance is a place where people can share their interests and passions about food and restaurants via the internet.

#### By Zhibin Liang

#### <u>Table of Contents</u>

- <a href="#description">Description</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#setupinstallation-requirements">Setup/Installation Requirements</a>
  - <a href="#getting-the-repo">Getting the repo</a>
  - <a href="#installing-dependencies">Installing Dependencies</a>
  - <a href="#adding-api-key">Adding API key</a>
  - <a href="#adding-firebase-config">Adding Firebase config</a>
- <a href="#known-bugs">Known Bugs</a>
- <a href="#license">License</a>
- <a href="#contact-information">Contact Information</a>
- <a href="#appendix">Appendix</a>
  - <a href="#mvp">MVP</a>
  - <a href="#stretch-goals">Stretch Goals</a>
  - <a href="#capstone-research--planning-log">Capstone Research & Planning Log</a>

## Description

With trusted local business information, Food Alliance provides a platform solution that allows users to search, locate and post reviews about their visited restaurants.

## Technologies Used

- [React](https://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [React Router](https://reactrouter.com/)
  - [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)
- [Firebase](https://firebase.google.com/)
  - [Cloud Firestore](https://firebase.google.com/docs/firestore)
  - [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Yele Fusion API](https://www.yelp.com/developers/documentation/v3/)
- [Google Map API](https://developers.google.com/maps)
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere)
- [query-string](https://github.com/sindresorhus/query-string)
- [styled-components](https://styled-components.com/)
- [Material UI](https://mui.com/)

## Setup/Installation Requirements

### Getting the repo

- Clone the repo to your desktop or any directory of your choice

  - Run the command below in a bash terminal with [Git](https://github.com/git-guides/install-git) installed

    ```
    git clone https://github.com/zbl14/foodie-alliance.git
    ```

- Or download as a zip file
  - Click the green code button on the repository page
  - At the bottom of the popup window select `Download ZIP`
  - Extract the downloaded .zip folder

### Installing Dependencies

- Make sure you have [Node.js](https://nodejs.org/en/download/) installed
- Open bash terminal in the top level of this directory
- Run `npm install` to install dependencies

### Adding API key

- This project does not include the Yelp API and Google Map API information you need, you must create your own in order to use this app locally

  - Get your Yelp API key on [Yelp Fusion](https://fusion.yelp.com/)
  - Get your Google Map API key on [Google Maps Platform](https://developers.google.com/maps)
  - Create .env at root directory
  - Add your Yelp API key and Google Map API key to .env

    ```
    REACT_APP_YELP_API_KEY=<Your Yelp Fusion apiKey>

    REACT_APP_MAP_KEY=<Your Google Map apiKey>
    ```

### Adding Firebase config

- This project does not include the firebase API information you need, you must create your own in order to use this app locally

  - Sign up for [Firebase](https://firebase.google.com/)
  - In your firebase console add a project
    - Navigate to the project and register a web app
    - Get your web app's Firebase configuration
      ```
      const firebaseConfig = {
        apiKey: <Your apiKey>,
        authDomain: <Your authDomain>,
        projectId: <Your projectId>,
        storageBucket: <Your storageBucket>,
        messagingSenderId: <Your messagingSenderId>,
        appId: <Your appId>
      };
      ```
    - Add following lines to .env with your firebaseConfig
      ```
      REACT_APP_FIREBASE_API_KEY = <Your apiKey>,
      REACT_APP_FIREBASE_AUTH_DOMAIN = <Your authDomain>
      REACT_APP_FIREBASE_PROJECT_ID = <Your projectId>
      REACT_APP_FIREBASE_STORAGE_BUCKET = <Your storageBucket>
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID = <Your messagingSenderId>
      REACT_APP_FIREBASE_APP_ID = <Your appId>
      ```
  - In the project on the left hand panel add Authentication
    - Select Sign-in method and add Email/Password
  - In the project on the left hand panel add Firestore Database
  - You're ready to use the app!

    - `npm start`

      - Runs the app in the development mode
      - Open [http://localhost:3000](http://localhost:3000) to view it in your browser

    - `npm test`
      - Launches the test runner in the interactive watch mode
    - `npm run build`
      - Builds the app for production to the `build` folder

## Known Bugs

- A user can upvote/downvote a review more than once. Should be fixed soon!

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

Zhibin Liang [Email](ifthereisoneday@gmail.com) || [GitHub](https://github.com/zbl14) || [LinkedIn](https://www.linkedin.com/in/zhibin-liang/)

## Appendix

### MVP

- Communicate with Yelp API
  - should be able to view a list of restaurants returned by the Yelp API ✅
  - should be able to sort through restaurants using a filter ✅
- Communicate with Google Map API
  - should be able to locate the restaurants returned by the Yelp API and show them on a map ✅
  - should be able to click Get Direction and have it opened in google map in a new tab ✅
- Forum system
  - should be able to create, read, update and delete a comment for restaurants ✅
  - should be able to upvote/downvote a comment ✅
- Registration system
  - should be able to create a user account ✅
  - allow users to create, update，delete and upvote/downvote reviews ✅

### Stretch Goals

- Allow all users to read reviews, only registered users can create, update review, only admin can delete reviews
- Add autocompletion of addresses to the “Location” input
- Allow user to click on different sorting options that can automatically requires the Yelp API ✅
- Add dark mode
- Add food order system
- Add visited validation system
- Create a mobile version
- Host my own instance of CORS Anywhere
- User can only vote on a review once

### Capstone Research & Planning Log

**ALL TIMES ARE IN PST**

- **2022-09-15 10:30 AM**: Research on how to use AutoHotKey
- **2022-09-15 10:50 AM**: Write a script for typing time stamp
- **2022-09-15 11:16 AM**: Complete the refactoring of the auto scrip.
  ```
  ^!s::
  FormatTime, CurrentDateTime, A_NowUTC, yyyy-MM-dd HH:mm tt
  SendInput - **%CurrentDateTime%**:
  return
  ```
- **2022-09-15 11:22 AM**: WIP: Write project proposal
- **2022-09-15 12:28 PM**: WIP: Write project proposal
- **2022-09-16 09:52 AM**: Complete the initial project proposal
- **2022-09-16 10:27 AM**: Researching on Yelp API documents
- **2022-09-16 11:33 AM**: Researching on [cors-anywhere](https://github.com/Rob--W/cors-anywhere), decide to use public server for mvc and host my own instance of cors-anywhere server as a stretch goal
- **2022-09-16 14:46 PM**: Complete initial MVP component tree
- **2022-09-16 17:59 PM**: Conducted research on [Firebase](https://firebase.google.com/) and completed help-queue pratice with [Firestore](https://firebase.google.com/docs/firestore) and [Firebase Authentication](https://firebase.google.com/docs/auth)
- **2022-09-24 13:00 PM**: Work on [React Google Maps API](https://github.com/JustFly1984/react-google-maps-api), find out this tool does not support React18 at this moment. Can not show marker on the map
- **2022-09-24 14:31 PM**: Research on [Google Map React](https://github.com/google-map-react/google-map-react), it supports React 18 since July 5, 2022
- **2022-09-24 16:22 PM**: Google Map React supports React 18 but need to disable StrictMode :/ (https://github.com/google-map-react/google-map-react/issues/1116)
- **2022-09-25 07:54 AM**: Disable StrictMode can address the issue that not showing marker on the map with **React Google Maps API** in React 18. Take this as a compromise solution.
- **2022-09-25 08:14 AM**: Replace the compromise solution. Use MarkerF insead of Marker can address the issue. It can show markers under StrictMode. (https://github.com/JustFly1984/react-google-maps-api/issues/3048)

Copyright &copy; 2022 Zhibin Liang
