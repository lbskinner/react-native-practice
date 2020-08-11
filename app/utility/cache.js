import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    // include a timestamp for value, use it to check if the value has expired
    const item = {
      value,
      timestamp: Date.now(),
    };
    // don't have to have a prefix
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

// get function is a query function
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // command query separation (CQS) principal - functions or methods should either be commands or queries but not both
      // command function changes the state of the system
      // query function returns the state of he system
      // the command below changes the state of the system, a violation of the CQS principal
      // okay in this case, don't want to store too much data in the AsyncStorage,
      // doing it for good reasons, we are cautiously breaking the rules
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
