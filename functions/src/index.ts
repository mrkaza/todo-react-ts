import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const todoCount = functions.firestore
  .document('todos/{todoId}')
  .onCreate(async () => {
    let todoCount: number;
    let todoCompleted: number;
    const statusRef = admin.firestore().collection('todoStatus').doc('status');

    const doc = await statusRef.get();
    if (doc.exists) {
      todoCount = doc.data()?.count;
      todoCompleted = doc.data()?.completed;
    } else {
      todoCount = 0;
      todoCompleted = 0;

      statusRef.set({
        count: 0,
        completed: 0,
      });
    }

    return statusRef.set(
      {
        count: todoCount + 1,
        completed: todoCompleted,
      },
      { merge: true },
    );
  });

export const deleteCount = functions.firestore
  .document('todos/{completed}')
  .onUpdate(async () => {
    let todoCompleted: number;
    const statusRef = admin.firestore().collection('todoStatus').doc('status');

    const doc = await statusRef.get();
    todoCompleted = doc.data()?.completed;

    return await statusRef.update({
      completed: todoCompleted + 1,
    });
  });
