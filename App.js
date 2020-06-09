import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './Navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import mealsReducer from './Store/Reducers/MealsReducer';
import {Provider} from 'react-redux';
const rootReducers = combineReducers({
  meals:mealsReducer
})
const store = createStore(rootReducers);
enableScreens();
const loadFonts  = () => {
  return Font.loadAsync({
    'sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
} 
export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  if(!isFontLoaded) {
  return <AppLoading startAsync={loadFonts}  onFinish={()=>setIsFontLoaded(true)} onError={(err) => console.log(err)}></AppLoading>
  }
  return (
    <Provider store={store}><MealsNavigator /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
