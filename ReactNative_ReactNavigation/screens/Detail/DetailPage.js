import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class DetailPage extends Component {
    _redirectToHome = () =>{
        this.props.navigation.navigate('Home')
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
            onPress={()=>this._redirectToHome()}
        >
            <Text>Back to HomePage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}