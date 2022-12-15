import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomePage from './screens/Home/HomePage';
import DetailPage from './screens/Detail/DetailPage';


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          {/* 
            name: Tên của màn hình được gọi trong Navigation Container;
            component: Giao diện sẽ được hiển thị trên màn hình;
          */}
          <Stack.Screen name="Home" component={HomePage} options={{title:'Home Page'}}/>
          <Stack.Screen name="Detail" component={DetailPage} options={{title:'Detail Page'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
// 1:11:42