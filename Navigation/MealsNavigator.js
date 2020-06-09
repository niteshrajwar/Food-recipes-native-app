import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen'
import MealsScreen from '../Screens/MealsScreen';
import MealDetails from '../Screens/MealDetails';
import colors from '../constants/colors';
import FavoriteMeals from '../Screens/FavoriteMeals'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FilterMeals from '../Screens/FilterMeals';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : colors.accentColor
    },
    headerTintColor: "white"
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetails: MealDetails
}, {
    defaultNavigationOptions
})

const FavMealsStackNavigator = createStackNavigator({
    FavMeals: FavoriteMeals,
    MealDetails: MealDetails
}, {
    defaultNavigationOptions
}
)
const FiterMealsStackNavigator = createStackNavigator({
    FilterMeal: FilterMeals,
    MealDetails:MealDetails
}, {
    defaultNavigationOptions
})
const bottomTabNavigatorConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-restaurant" size={20} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    },
    Favorite: {
        screen: FavMealsStackNavigator, navigationOptions: {
            bottomTabNavigatorConfig,
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor} />
            }
        }
    }
}


const MealsTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(bottomTabNavigatorConfig, {
        activeTintColor: Colors.accentColor,
        shifting: false,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(bottomTabNavigatorConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    })
const mainNavigator = createDrawerNavigator({
    Meals:MealsTabNavigator,
    Filter:FiterMealsStackNavigator
})
export default createAppContainer(mainNavigator); 