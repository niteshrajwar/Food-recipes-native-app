import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import {useDispatch} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/CustomHeaderButton';
import {ToggleFilterAction} from '../Store/Actions/MealActions'
const SwitchFilter = props => {
    return (
        <View style={styles.filterItems}>
            <Text style={{ fontFamily: 'sans-bold' }}>{props.title}</Text>
            <Switch value={props.val} onValueChange={props.onToggle} />
        </View>
    )
}
const FilterMeals = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
   const dispatch = useDispatch();
    const filterChangeHandler = useCallback(() => {
        const filteredCriterias = {
            isGlutenFree:isGlutenFree,
            isLactoseFree: isLactoseFree,
            isVegetarian: isVegetarian,
            isVegan: isVegan
        }
         dispatch(ToggleFilterAction(filteredCriterias));
    },
        [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch],
    )
     
     useEffect(() => {
        props.navigation.setParams({'filterChangeHandler': filterChangeHandler})
     }, [filterChangeHandler])
    return (
        <View style={styles.screen} >
            <View style={styles.title}><Text style={{ fontFamily: 'sans-bold', fontSize: 20 }}>Select your Filter / Restrictions</Text></View>
            <View>
                <SwitchFilter title="Gluten free" val={isGlutenFree} onToggle={newChange => { setIsGlutenFree(newChange) }} />
                <SwitchFilter title="Vegan Only" val={isVegan} onToggle={newChange => { setIsVegan(newChange) }} />
                <SwitchFilter title="Vegetarian" val={isVegetarian} onToggle={newChange => { setIsVegetarian(newChange) }} />
                <SwitchFilter title="Lactose free" val={isLactoseFree} onToggle={newChange => { setIsLactoseFree(newChange) }} />
            </View>
        </View>
    );

}
FilterMeals.navigationOptions = navData => {
    const filterChangeHandler = navData.navigation.getParam('filterChangeHandler');
    return {
        headerTitle: 'Filtered Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="menu"
                    iconName="ios-menu"
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    title="save"
                    iconName="ios-save"
                    onPress={filterChangeHandler}
                />
            </HeaderButtons>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    filterItems: {
        margin: 10
    },
    title: {
        margin: 10

    }
})
export default FilterMeals;