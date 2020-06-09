import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Platform, TouchableNativeFeedback} from 'react-native';

const MealCategoriesGrid = props => {
    let TouchComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchComponent = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridContainer}>
        <TouchComponent style={{flex:1}}
           onPress={props.onClick}>
            <View style ={{...styles.itemContainer,backgroundColor:props.itemData.item.color}} >
                <Text style={styles.textContainer}>{props.itemData.item.title}</Text>
            </View>
        </TouchComponent>
        </View>
    )
}
const styles = StyleSheet.create({
   gridContainer: {
        flex: 1,
        justifyContent: "space-around",
        margin: 10,
        height: 150,
        borderRadius:10,
        overflow:"hidden",
        shadowColor:'black',
      shadowOpacity:0.8,
      shadowRadius:10,
      borderRadius:10,
      elevation:3,
    },
    itemContainer : {
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      shadowColor:'black',
      shadowOpacity:0.8,
      shadowRadius:10,
      borderRadius:10,
      elevation:3,
    },
    textContainer: {
        fontFamily:'sans-bold',
        fontSize:15
    }
})
export default MealCategoriesGrid;