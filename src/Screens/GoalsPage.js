import React, { useRef } from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";
import {storage} from '../utils/createMMKV'
import NewGoal from '../Components/NewGoal'

const GoalsPage = () => {

    const theGoal =  useRef();

    return(
        <View style={styles.container}>
            <View style={styles.goals}>
                <Text>
                    This is the goals Page!
                    {/*'\n'} The key is {storage.getString("token")*/}
                </Text>
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