import React from 'react';
import {useSelector} from 'react-redux';
import { View,Text, StyleSheet,Button, FlatList} from 'react-native';
import MealItem from '../Components/MealItem';

const MealsScreen = props => {
    const {id,title} = props.navigation.getParam('mealCategoryDetails');
    const meals  = useSelector(state => state.meals.filteredMeals);
    const favMeals = useSelector(state => state.meals.favouriteMeals);
      const mealsToDisplay = meals.filter(meal=> {
       return meal.categoryIds.includes(id);
    })
  const renderMealDetails = itemData => {
    const isFavMeal = favMeals.some(m=> m.id === itemData.item.id) ;
    console.log(isFavMeal);
    return (
       <MealItem 
       title={itemData.item.title} 
       duration={itemData.item.duration} 
       imageUrl = {itemData.item.imageUrl}
       affordability = {itemData.item.affordability}
       complexity = {itemData.item.complexity}
       onSelect ={()=>{
           props.navigation.navigate('MealDetails',{
               mealDetails:itemData.item,
               favMeal: isFavMeal
           })
       }}
       />
    )
  }
    return (
        <View style={styles.screenContainer}>
        { mealsToDisplay.length>0 ? <FlatList
        keyExtractor = {(item,index) => item.id}
         renderItem={renderMealDetails} data={mealsToDisplay} style={{width:'100%'}}/> : 
          <View style={styles.noContent}><Text style={styles.textContent}>No meals available for this category .</Text></View>}
         </View>
    )
}
MealsScreen.navigationOptions = (navigationData) => {
    const {id,title} = navigationData.navigation.getParam('mealCategoryDetails');
    return {
        headerTitle:title
    }
}
const styles = StyleSheet.create({
  screenContainer :{
    margin:10
  },
  noContent:{
    justifyContent:"center",
    alignItems:"center"
},
textContent: {
  fontFamily:'sans-regular',
  fontSize:20
}
})
export default MealsScreen;