// Import libraries to create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

const Test = () => {
    return(
        <View style={ { flex: 1 } }>
            <Header headerText='Albums' />
            <AlbumList />
        </View>
    );
};

// Render the component to device

AppRegistry.registerComponent('albums', () => Test);