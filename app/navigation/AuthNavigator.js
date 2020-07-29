import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

// createStackNavigator gives an object
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    {/* first screen is the default screen showing or use initialRouteName */}
    {/* name is used to define the routes and shows as the title of the bar  */}
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;

// codes below are for learning purposes
const Link = () => {
  // navigate method only available to the stack screens
  // child component needs to use hook to access the navigation method
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    {/* <Link /> */}
    <Button
      title="View Tweet"
      // the navigate method makes sure there is a single route/screen/instance
      // push method pushes a new route onto the stack, creates another instance
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  // child component don't have access to route, need to use useRoute hook
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const StackNavigator = () => (
  // the StackNavigator components knows how to navigate between the different screens
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    {/* first screen is the default screen showing or use initialRouteName */}
    {/* name is used to define the routes and shows as the title of the bar  */}
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      // options within the screen only affects the screen
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={{ title: "Tweet Details" }} - set static screen title
      // set dynamic screen title
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);
