// Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// Create Component

const App = () => (
  <View style={styles.albumListStyle}>
    <Header headerText={'Grass Title!'} />
    <AlbumList />
  </View>
);

const styles = {
  albumListStyle: {
    backgroundColor: '#75042f',
    flex: 1
  }
};

// render it

AppRegistry.registerComponent('albums', () => App);
