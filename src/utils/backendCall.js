import React from "react";
import axios from "axios";
import {storage} from '../utils/createMMKV'

const signUp = async(userName, email, password) => {

    const AndroidUrl = 'http://10.0.2.2:8000/api/users'

    try{
            const response = await axios.post(AndroidUrl, {
               name: userName,
               email: email,
               password: password
            })
            console.log(response);
            return response;
        }catch(err){
            console.log(err);
            return err;
        }
}

const logIn = async(email, password) => {

    const AndroidUrl = 'http://10.0.2.2:8000/api/users/login'

    try{
            const response = await axios.post(AndroidUrl, {
               email: email,
               password: password
            })
            console.log(response);
            if(response.data.success){
                const token = response.data.data.authToken;
                storage.set("token", token);
                console.log(storage.getString("token"));
                return response;
            }
            return null;
        }catch(err){
            console.log(err);
            return err;
        }
}

const postGoal = async(goal) => {
    const ANDROIDURL = 'http://10.0.2.2:8000/api/goals';

    try{
        const response = await axios.post(ANDROIDURL, {
            title: goal 
        }, {
            headers: {
                Authorization: `Bearer ${storage.getString("token")}`
            }
        })
        console.log(response);
    } catch(e){
        console.log("Error making the goal: " + e);
    }
}

export {signUp, logIn, postGoal};