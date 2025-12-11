import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList} from "react-native";
import {storage} from '../utils/createMMKV'
import NewGoal from '../Components/NewGoal'
import LogOut from '../Components/LogOut'
import {getGoals} from '../utils/backendCall'
import { useSelector} from 'react-redux';

const GoalsPage = () => {

    const theGoal =  useRef();
    const [goals, setGoals] = useState();

    useEffect(()=>{
        getGoals;
    }, [])

    const getGoals = async() =>{
        setGoals(getGoals());
    }

    const usuario = useSelector(state => state.user);
    console.log(usuario);

    return(
        <View style={styles.container}>
            <View style={styles.goals}>
                <Text>
                    This is the goals Page!
                    {/*'\n'} The key is {storage.getString("token")*/}
                </Text>
                <LogOut />
                {/* <FlatList 
                    data={goals}
                    
                /> */}
            </View>

            <View style={styles.container}>
                <Button 
                    title="Reset input!"
                    onPress={theGoal.current?.sendGoal()}
                />
            </View>
            
            <View style={styles.container}>
                <NewGoal ref={theGoal}/>
            </View>
        </View>
    )
}

export default GoalsPage;

const styles = StyleSheet.create(
    {
        container: {flex: 1},
        goals: {flex: 8},
        texBox: {borderWidth: 2}
    }
)