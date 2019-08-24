
    // Firebase App (the core Firebase SDK) is always required and
    // must be listed before other Firebase SDKs
    import * as firebase from "firebase/app";

    // Add the Firebase services that you want to use
    import "firebase/auth";
    import "firebase/firestore";
    var firebaseConfig = {
        apiKey: "AIzaSyBCf3fiGroTPxfR5KzBOZIhGoJovdULQBk",
        authDomain: "packages-98112.firebaseapp.com",
        databaseURL: "https://packages-98112.firebaseio.com",
        projectId: "packages-98112",
        storageBucket: "packages-98112.appspot.com",
        messagingSenderId: "427490459014",
        appId: "1:427490459014:web:0dee73331bd3e432"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    const admin = require('firebase-admin');
    const functions = require('firebase-functions');

    admin.initializeApp(functions.config().firebase);

    let db = admin.firestore();


    
    
    document.querySelector('#button').addEventListener('click',(event)=>{

        let docRef = db.collection('users').doc('alovelace');

    let setAda = docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
        });
    });