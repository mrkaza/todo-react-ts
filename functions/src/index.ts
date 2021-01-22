import * as admin from 'firebase-admin';

admin.initializeApp();

export * from './todo';
export * from './cron';
export * from './callable';
