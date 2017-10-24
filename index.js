// Import libraries to create a component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a component

const Test = () => {
    return(
        <Header headerText='Albums' />
    );
};

// Render the component to device

AppRegistry.registerComponent('albums', () => Test);