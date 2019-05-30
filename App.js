import React from 'react'
import List from './List.js'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const App = () => {
   return (
      <List />
   )
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App

