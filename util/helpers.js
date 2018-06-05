import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from 'react-native';

const NOTIFICATION_KEY = 'MobileFlashCards:notifications';

export function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
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

const afterAminute=()=>{
  let afterAminute = new Date();
  afterAminute.setMinutes(afterAminute.getMinutes()+1);
  return afterAminute;
};

const tomorrow=()=>{
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+1 );
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);
  return tomorrow;
};
export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
              .then(JSON.parse)
              .then((data) => {
                if (data === null) {
                  Permissions.askAsync(Permissions.NOTIFICATIONS)
                             .then(({ status }) => {
                               if (status === 'granted') {
                                 Notifications.cancelAllScheduledNotificationsAsync();
                                 Notifications.scheduleLocalNotificationAsync(
                                   createNotification(),
                                   {
                                     time: afterAminute(),//TODO for production, change this with tomorrow().
                                     repeat: 'day'
                                   }
                                 );
                                 AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                               }
                             });
                }
              });
}