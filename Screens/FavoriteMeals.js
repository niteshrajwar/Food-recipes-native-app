import React from 'react';
import {useSelector } from 'react-redux';
import { View,Text,StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
import MealItem from '../Components/MealItem';


const FavoriteMeals = props => {
   const favouriteMeals =  useSelector(state =>  state.meals.favouriteMeals);
   const renderList = itemData => {
       return (
           <MealItem
            title={itemData.item.title}
            imageUrl = {itemData.item.imageUrl}
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            duration = {itemData.item.duration}
            onSelect = {()=>{{
                props.navigation.navigate('MealDetails',{
                    mealDetails:itemData.item
                })
            }}}
            />
       )}
    return (
        <View style={styles.screen}>
            { favouriteMeals.length > 0 ? <FlatList
             keyExtractor = {(item,index) => item.id}
             data={favouriteMeals}
             renderItem={renderList} style={{width:'100%'}} /> : 
             <View style={styles.noContent}><Text style={styles.textContent}>No favorite meal added yet !!</Text></View>}
        </View>
    );

}
FavoriteMeals.navigationOptions = navData => {
    return {
       headerTitle: 'Your Fav Meals',
      headerLeft: (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
              <Item
                title ="menu" 
                iconName="ios-menu" 
                onPress={()=> navData.navigation.toggleDrawer()}
              />
          </HeaderButtons>
      )}
    }
const styles = StyleSheet.create({
   screen: {
    margin:10
   },
  
})
export default FavoriteMeals;