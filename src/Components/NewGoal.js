import React, { forwardRef, useImperativeHandle, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {postGoal} from '../utils/backendCall';


const NewGoal = forwardRef(function NewGoal (props, ref){
//const NewGoal = () =>{
    const [goal, setGoal] = useState("");

    useImperativeHandle(ref, () => {
        sendGoal
    })

    const sendGoal= () => {
        setGoal('');
    }

    const uploadGoal = async() =>{
        postGoal(goal);
        setGoal('');
    }

    return(
        <View>
            <View  >
                <TextInput
                value={goal}
                onChangeText={setGoal}
                style = {styles.texBox}>
                </TextInput>
            </View>

            <View>
                <View >
                    <TouchableOpacity style={{borderWidth: 1, backgroundColor: 'lightgreen', width: '80%', alignItems: 'center'}}
                        onPress={uploadGoal}
                    >
                        <Text>
                            Set goal! {goal}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
                
        </View>
    )
})

export default NewGoal;

const styles = StyleSheet.create(
    {
        container: {flex: 1,},
        twoMain: {flex: 1,},
        texBox: {borderWidth: 2}
    }
)