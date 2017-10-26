import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

    // Setting state
    state = { albums: [] };

    // Lifecycle method before the component is rendered
    componentWillMount() {

        // HTTP call

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => this.setState( { albums: response.data } )
            );
    }

    renderAlbums() {
         return this.state.albums.map( (album, i) =>
             <AlbumDetail key={ album.title } album={ album } />
         );
    }

    render() {
        console.log(this.state.albums);
        return(
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;