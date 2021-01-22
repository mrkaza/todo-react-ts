import * as functions from 'firebase-functions';

import admin = require('firebase-admin');

export const cronCounter = functions.pubsub
  .schedule('every 1 minutes')
  .onRun(async () => {
    let cron: number;
    const cronRef = admin.firestore().collection('cronCounter').doc('counter');

    const doc = await cronRef.get();

    if (doc.exists) {
      cron = doc.data()?.cron;
    } else {
      cron = 0;
    }
    return cronRef.set({
      cron: cron + 1,
    });
  });
