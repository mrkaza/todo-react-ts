import * as functions from 'firebase-functions';

import admin = require('firebase-admin');

export const loginCount = functions.https.onCall(async () => {
  const loginRef = admin.firestore().collection('loginCounter').doc('login');
  let counter: number;

  const doc = await loginRef.get();

  if (doc.exists) {
    counter = doc.data()?.counter;
  } else {
    counter = 0;
  }

  return loginRef.set({
    counter: counter + 1,
  });
});
