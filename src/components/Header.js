import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Styling. Plain JS object

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        // To align vertically
        justifyContent: 'center',
        // To align horizontally
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

// Make the component available to rest of the APP
export default Header;