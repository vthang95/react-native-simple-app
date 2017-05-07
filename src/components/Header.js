// Import libaries
import React from 'react';
import { Text, View } from 'react-native';

// Create Component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

// Make component available to other parts of the app
export default Header;
