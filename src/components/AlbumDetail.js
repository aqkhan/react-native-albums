import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Destructuring props object to extract objects we need

// onPress used in button is not event handler but just a prop. That allows re-usability of button and setting several methods for the same darn thing.

const AlbumDetail = ( { album } ) => {

    const { title, artist, thumbnail_image, image, url } = album;

    return(
      <Card>
          <CardSection>
              <View style={styles.thumbnailContainer}>
                  <Image
                      style={styles.thumbnail}
                      source={ { uri: thumbnail_image } }
                  />
              </View>
              <View style={styles.topSection}>
                  <Text style={styles.title}>{ title }</Text>
                  <Text style={styles.artist}>{ artist }</Text>
              </View>
          </CardSection>
          <CardSection>
              <Image
                  source={ { uri: image  } }
                  style={styles.albumArt}
              />
          </CardSection>
          <CardSection>
              <Button onPress={() => Linking.openURL(url)}>
                  BUY NOW
              </Button>
          </CardSection>
      </Card>
    );
};

const styles = StyleSheet.create({
    topSection: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 18
    },
    artist: {
        color: 'grey'
    },
    // Image tag in react native won't work without width and height
    thumbnail: {
        height: 60,
        width: 60
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumArt: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;