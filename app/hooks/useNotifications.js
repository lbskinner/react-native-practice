import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
// import * as Notifications from "expo-notifications";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []); // add the empty array to call registerForPushNotifications()only once

  const registerForPushNotifications = async () => {
    try {
      // push notifications do not work on simulator, always returns false
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      // send token to server
      // expoPushTokensApi.register(token.data); - from expo-notifications
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
