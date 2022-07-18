// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyCgxnPOsIOrZOgC7KC38PeujRwXNQqdEUU",
    authDomain: "educo-ltc.firebaseapp.com",
    projectId: "educo-ltc",
    storageBucket: "educo-ltc.appspot.com",
    messagingSenderId: "664472023712",
    appId: "1:664472023712:web:572665974a1faadf1fcfc5",
    measurementId: "G-REM39S09X2"
});

// firebase.initializeApp({
//     apiKey: "AIzaSyCiH99l1IKo82ndsD-vD8fVluJ3_Fry57U",
//     authDomain: "educogolf.firebaseapp.com",
//     projectId: "educogolf",
//     storageBucket: "educogolf.appspot.com",
//     messagingSenderId: "23551136766",
//     appId: "1:23551136766:web:8d6ee88c6cf615a12766af",
//     measurementId: "G-HGGS51SQJC"
// });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();