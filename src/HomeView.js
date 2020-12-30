import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, Alert } from 'react-native';

export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      switchValue: false,
    }
  }
  onChange = (value) => {
    console.log(`El switch cambiara a ${value}`)
  }
  render() {
    const data = this.props.text1;
    console.log(`El valor recibido es ${data}`)
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
