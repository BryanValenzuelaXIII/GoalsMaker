import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { storage } from "./utils/createMMKV";

import AuthenticationScreen from "./Screens/AuthenticationScreen";
import SignUp from "./Screens/SignUp";
import GoalsPage from "./Screens/GoalsPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="GoalsPage" component={GoalsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
