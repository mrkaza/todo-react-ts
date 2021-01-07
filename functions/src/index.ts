import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// let status: any;

// admin
//   .firestore()
//   .collection('todoStatus')
//   .doc('status')
//   .get()
//   .then((doc) => {
//     status = doc.data();
//   });

export const todoCount = functions.firestore
  .document('todos/{todoId}')
  .onCreate(async () => {
    let status: any;
    const doc = await admin
      .firestore()
      .collection('todoStatus')
      .doc('status')
      .get();
    status = doc.data();

    return admin
      .firestore()
      .collection('todoStatus')
      .doc('status')
      .update({
        count: status.count + 1,
      });
  });

export const deleteCount = functions.firestore
  .document('todos/{completed}')
  .onUpdate(async () => {
    let status: any;
    const doc = await admin
      .firestore()
      .collection('todoStatus')
      .doc('status')
      .get();
    status = doc.data();

    return await admin
      .firestore()
      .collection('todoStatus')
      .doc('status')
      .update({
        completed: status?.completed + 1,
      });
  });
