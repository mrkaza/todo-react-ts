import * as functions from 'firebase-functions';

import admin = require('firebase-admin');

export const todoCount = functions.firestore
  .document('todos/{todoId}')
  .onCreate(async () => {
    let todoCounter: number;
    let todoCompleted: number;
    const statusRef = admin.firestore().collection('todoStatus').doc('status');

    const data = await statusRef.get();

    if (data.exists) {
      todoCounter = data.data()?.count;
      todoCompleted = data.data()?.completed;

      return statusRef.set(
        {
          count: todoCounter + 1,
          completed: todoCompleted,
        },
        { merge: true },
      );
    } else {
      todoCounter = 0;
      todoCompleted = 0;

      return statusRef.set({
        count: 0 + 1,
        completed: 0,
      });
    }
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
