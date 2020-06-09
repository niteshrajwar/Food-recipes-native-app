import React from 'react';
import { View, Text, StyleSheet, Button, FlatList,TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../datas/CategoryData';
import MealCategoriesGrid from '../Components/MealCategoriesGrid'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
const CategoriesScreen = props => {
    renderData = itemData => {
        return (

          < MealCategoriesGrid
          onClick = {()=> {props.navigation.navigate('Meals', {
            mealCategoryDetails : itemData.item
           })}} itemData ={itemData}  />
        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderData}
        />
    );

}
CategoriesScreen.navigationOptions = navData => {
  return {
     headerTitle: 'Meal Categories',
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
        flex: 1,
        justifyContent: 'center',
        alignContent: "center"
    }
})
export default CategoriesScreen;