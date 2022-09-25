# Capstone Planning Log

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
- **2022-09-25 08:14 AM**: Replace the compromise solution. Use MarkerF insead of Marker can address the issue. It can show markers under StrictMode.
