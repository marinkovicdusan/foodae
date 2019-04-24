import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Pasta30 extends Component {

    static navigationOptions = {
        title: 'Pasta bis zu 30 Chf',
    }

    FilterOptions() {
        this.props.navigation.navigate('restaurant')
    }

    render() {
        const { container, map } = styles
        return (
            <View style={container}>
                <MapView style={map}
                    region={{
                        latitude: 47.378564,
                        longitude: 8.538682,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                >

                    <MapView.Marker
                        coordinate={{
                            latitude: 47.360118,
                            longitude: 8.526038
                        }}
                        pinColor="red"
                        title={'Vapiano'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.361000,
                            longitude: 8.547785
                        }}
                        pinColor="red"
                        title={'Vapiano'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.375861,
                            longitude: 8.543718
                        }}
                        pinColor="red"
                        title={'Dieci'}
                        description={'Pasta'}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }

})