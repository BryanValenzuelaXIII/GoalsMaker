import React from "react"

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

const signIn = async(email, password) => {

    const AndroidUrl = 'http://10.0.2.2:8000/api/users/login'

    try{
            const response = await axios.post(AndroidUrl, {
               email: email,
               password: password
            })
            console.log(response);
            if(response.data.success){
                const token = response.data.data.authToken;
                await AsyncStorage.setItem("token", token);
                return response;
            }
            return null;
        }catch(err){
            console.log(err);
            return err;
        }
}

export {signUp, signIn};