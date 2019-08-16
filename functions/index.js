const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from fayerbeis!");
});

exports.holimundo = functions.https.onRequest((request, response) => {
 response.send("Holi de fayerbeis!");
});

exports.test = functions.https.onRequest((request, response) => {
 response.send("Holi de fayerbeis!");
});