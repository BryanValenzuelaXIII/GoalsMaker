import React from "react";
import {storage} from '../utils/createMMKV'
import { Button } from "react-native";
import {useDispatch} from 'react-redux';
import {onUserLoggingOut} from '../store/userSlice'

const LogOut = () =>{
    
    const dispatcher = useDispatch()


    const loggingOut = () => {
        storage.remove("token");
        dispatcher(onUserLoggingOut());
    }

    return(
        <Button 
            title="Log out"
            onPress={loggingOut}
        />
    );
}

export default LogOut;