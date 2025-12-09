import React from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import {storage} from '../utils/createMMKV'
import NewGoal from '../Components/NewGoal'

const GoalsPage = () => {
    return(
        <View style={styles.container}>
            <View style={styles.goals}>
                <Text>
                    This is the goals Page!
                    {/*'\n'} The key is {storage.getString("token")*/}
                </Text>
            </View>
            
            <View style={styles.container}>
                <NewGoal />
            </View>
        </View>
    )
}

export default GoalsPage;

const styles = StyleSheet.create(
    {
        container: {flex: 1},
        goals: {flex: 10},
        texBox: {borderWidth: 2}
    }
)