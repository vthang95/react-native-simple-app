import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    padding: 10
  }
};

export default Button;
