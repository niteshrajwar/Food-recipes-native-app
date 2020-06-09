import React from 'react';
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, StyleSheet, ImageBackground } from 'react-native';

const MealItem = props => {
    console.log(props)
    let TouchComponent = TouchableOpacity;
    if (Platform.Version >= 21 && Platform.OS === 'android')
        TouchComponent = TouchableNativeFeedback
    return(
        <View style={styles.mainContainer}>
            <TouchComponent onPress={props.onSelect}>
                <View style={styles.content}>
                    <View style={{...styles.header,...styles.row}}>
                   <ImageBackground style={styles.bgImage} source={{uri:props.imageUrl}} >
                     <Text style={styles.titleText}>{props.title}</Text>
                      </ImageBackground>
                    </View>
                    <View style={{...styles.details,...styles.row}}>
                     <Text>{props.duration}m</Text>
                     <Text>{props.complexity.toUpperCase()}</Text>
                     <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchComponent>
            {/* <MealListItem
             imageUrl = {props.imageUrl}
             title={props.title}
             duration={props.duration}
             complexity= {props.complexity}
             affordability = {props.affordability}
             onSelect={props.onSelect} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
     width:'100%',
     height:250,
     backgroundColor:'pink',
     marginBottom:20,
     borderRadius:10,
     overflow:"hidden"
    },
    header:{
      height:'90%'
    },
    row:{
     flexDirection:'row'
    },
    titleText:{
        fontFamily:'sans-bold',
        fontSize:20,
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        textAlign:"center",
        height:'15%'
       }
    ,
    imageContainer:{
        flexDirection:'row',
        width:'90%',
        height:'90%',
    },
    bgImage:{
        width:'100%',
        height:'100%'
    },
    details:{
    justifyContent:"space-around",
     fontFamily:'sans-bold',
     fontSize:20
    }
    
})
export default MealItem;