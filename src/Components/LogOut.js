import React from "react";
import {storage} from '../utils/createMMKV'
import { Button } from "react-native";

const LogOut = () =>{
    
    const loggingOut = () => {
        storage.remove("token")
    }

    return(
        <Button 
            title="Log out"
            onPress={loggingOut}
        />
    );
}

export default LogOut;