import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class HomePage extends Component {
    _redirectToDetail = () =>{
        this.props.navigation.navigate('Detail')
    }
  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity
            style={{
                backgroundColor:'green', 
                padding: 16, 
                width: 150, 
                justifyContent:'center', 
                alignItems:'center'
            }}
            onPress={()=>this._redirectToDetail()}
        >
            <Text>HomePage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}