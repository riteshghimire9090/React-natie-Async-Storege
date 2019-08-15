/* @flow */

import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';



export default class App extends Component {
  state={
    item:'loading'
  }
  async componentDidMount(){
    this.setState({
      item:await AsyncStorage.getItem('mykey')
    })
  }
  storeData = async () => {
  try {
    await AsyncStorage.setItem('mykey', 'I like to save it.');
    this.setState({
      item:await AsyncStorage.getItem('mykey')
    })

  } catch (error) {
    console.log(error)
  }
  console.log(this.state)
  };
  DeleteData = async () => {
  try {
    await AsyncStorage.removeItem('mykey',async ()=>{
      console.log('Delete')
    });
    this.setState({
      item:'Delete Data'
    })

  } catch (error) {
    console.log(error)
  }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the App component</Text>
        <Button
        title='Hello'
        onPress={this.storeData }
        />
        <Button
        title='Delete'
        onPress={this.DeleteData }
        />
        <Text >{this.state.item}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
