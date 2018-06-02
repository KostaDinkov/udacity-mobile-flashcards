import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return todayUTC.toISOString().split('T')[0];
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
                     .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Practice!',
    body: "👋 You haven't practiced any of your quizzes today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
              .then(JSON.parse)
              .then((data) => {
                if (data === null) {
                  Permissions.askAsync(Permissions.NOTIFICATIONS)
                             .then(({ status }) => {
                               if (status === 'granted') {
                                 Notifications.cancelAllScheduledNotificationsAsync();

                                 let tomorrow = new Date();
                                 tomorrow.setDate(tomorrow.getDate() + 0);
                                 tomorrow.setHours(16);
                                 tomorrow.setMinutes(55);

                                 Notifications.scheduleLocalNotificationAsync(
                                   createNotification(),
                                   {
                                     time: tomorrow,
                                     repeat: 'day'
                                   }
                                 );

                                 AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                               }
                             });
                }
              });
}