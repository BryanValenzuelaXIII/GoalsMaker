import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";

import AuthenticationScreen from './Screens/AuthenticationScreen'
import SignUp from './Screens/SignUp'
import GoalsPage from './Screens/GoalsPage'

console.log("SignUp component:", SignUp);

const Stack = createNativeStackNavigator();

const Navigation = function(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='AuthenticationScreen' component={AuthenticationScreen}/>
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='GoalsPage' component={GoalsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;