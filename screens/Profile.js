import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text } from 'react-native';

import FloatingLabelInput from '../components/FloatingLabelInput';

export default class Profile extends Component {
  state = {
    value: '',
  };

  handleTextChange = (newText) => this.setState({ value: newText });

  render() {
    return (
      <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
        <StatusBar hidden />
        <FloatingLabelInput
          label="Email"
          value={this.state.value}
          onChangeText={this.handleTextChange}
        />
         <FloatingLabelInput
          label="Password"
          value={this.state.value}
          onChangeText={this.handleTextChange}
        />
         <FloatingLabelInput
          label="Confirm Password"
          value={this.state.value}
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}
