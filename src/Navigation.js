import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { storage } from "./utils/createMMKV";

import AuthenticationScreen from "./Screens/AuthenticationScreen";
import SignUp from "./Screens/SignUp";
import GoalsPage from "./Screens/GoalsPage";
import { useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const usuario = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      {!usuario?.data ? 
      (<>
      <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
        </> ):
        (
      <Stack.Screen name="GoalsPage" component={GoalsPage} />)
    }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
