import React from "react";
import axios from "axios";
import {storage} from '../utils/createMMKV'
import { Platform } from "react-native";

const url = axios.create({
    baseURL:
    Platform.OS === 'ios'? 'http://localhost:8000/api' : 'http://10.0.2.2:8000/api'
});

url.interceptors.request.use(
    (config) => {
        config.headers.Accept = 'application/json' 
        const token = storage.getString('token');
        if(token)
             config.headers.Authorization = `Bearer ${token}`;
        return config
    },
    (error) =>{Promise.reject(error)}
)

const signUp = async(userName, email, password) => {

    const AndroidUrl = '/users'

    try{
            const response = await url.post(AndroidUrl, {
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

    const AndroidUrl = '/login'

    try{
            const response = await url.post(AndroidUrl, {
               email: email,
               password: password
            })
            console.log(response);
            if(response.data.success){
                // const token = response.data.data.authToken;
                // storage.set("token", token);
                // console.log(storage.getString("token"));
                return response;
            }
            return null;
        }catch(err){
            console.log(err);
            return err;
        }
}

const getGoals = async() => {
    const ANDROIDURL = '/goals';

    try{
        const response = await url.get(ANDROIDURL, )
            console.log(response);
    } catch (e){
        console.log(e)
    }
}

const postGoal = async(goal) => {
    const ANDROIDURL = '/goals';

    try{
        const response = await url.post(ANDROIDURL, {
            title: goal 
        })
        console.log(response);
    } catch(e){
        console.log("Error making the goal: " + e);
    }
}

const deleteGoal = async(id) => {
    const ANDROIDURL = '/goals';

    try{
        const response = await axios.delete(ANDROIDURL, {
            id: id 
        },)
        console.log(response);
    } catch(e){
        console.log("Error making the goal: " + e);
    }
}

export {signUp, logIn, getGoals, postGoal, deleteGoal};