import React ,{useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Button, Image,ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
import { ToggleFavAction } from '.././Store/Actions/MealActions'
const CategoriesScreen = props => {
    const dispatch = useDispatch();
    const mealData = props.navigation.getParam('mealDetails');
    const isFavMeal = useSelector(state => state.meals.favouriteMeals.some(m=> m.id === mealData.id));

    const toggleFavOptionHandler = useCallback(() => {
        dispatch(ToggleFavAction(mealData.id))
    },[mealData, dispatch])

    useEffect(() => {
        props.navigation.setParams({'toggleFavHandler': toggleFavOptionHandler});
    }, [toggleFavOptionHandler])

    useEffect( ()=> {
        props.navigation.setParams({'favMeal':isFavMeal})
    },[isFavMeal])

    return (
        <View style={styles.screen}>
                <Image source={{uri:mealData.imageUrl}} style={styles.image} />
                <View style={styles.textContent}>
                    <Text>{mealData.duration}m</Text>
                    <Text>{mealData.complexity.toUpperCase()}</Text>
                    <Text>{mealData.affordability.toUpperCase()}</Text>
                </View>
                <ScrollView >
                <Text style={styles.title}>Ingredients</Text>
                    {mealData.ingredients.length > 0 ? 
                      mealData.ingredients.map(item=> <View key={item} style={styles.listItem}><Text style={{ fontFamily:'sans-regular'}}>{item}</Text></View> ) 
                       : null  
                }
                <Text style={styles.title}>Steps</Text>
                {mealData.steps.length > 0 ? 
                      mealData.steps.map(step=> <View key={step} style={styles.listItem}><Text style={{ fontFamily:'sans-regular'}}>{step}</Text></View> ) 
                       : null  
                }
        </ScrollView>
        </View>
    );

}
CategoriesScreen.navigationOptions = (navigationData) => {
    const mealData = navigationData.navigation.getParam('mealDetails');
    const toggleFunc = navigationData.navigation.getParam('toggleFavHandler');
    const isFavMeal = navigationData.navigation.getParam('favMeal');
    return {
        headerTitle: mealData.title,
        headerRight: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title="Favorite"
                iconName={ isFavMeal ? "ios-star": "ios-star-outline"}
                onPress={toggleFunc}
            />
        </HeaderButtons>)
    }
}
const styles = StyleSheet.create({
    screen: {
        flex:1,
         width:'100%',
         marginVertical:10,
    },
    image: {
        width:'100%',
        height: '40%',
    },
    title : {
     fontFamily:'sans-bold',
     fontSize:23,
     textAlign:"center",
     marginTop:15
    },
    textContent : {
     flexDirection:'row',
     justifyContent:"space-around"
    },
    listItem: {
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:2,
        width:'90%',
        marginVertical:2,
        alignItems:"center",
        backgroundColor:'yellow',
        marginHorizontal:20,
    }
})
export default CategoriesScreen;