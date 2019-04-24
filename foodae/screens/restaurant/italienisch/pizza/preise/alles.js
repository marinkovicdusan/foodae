import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Pizzaalles extends Component {

    static navigationOptions = {
        title: 'Pizza',
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
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.361000,
                            longitude: 8.547785
                        }}
                        pinColor="red"
                        title={'Vapiano'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.368019,
                            longitude: 8.540198
                        }}
                        pinColor="red"
                        title={'SAM`s Pizza Land'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.376852,
                            longitude: 8.541917
                        }}
                        pinColor="red"
                        title={'SAM`s Pizza Land'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.376504,
                            longitude: 8.525866
                        }}
                        pinColor="red"
                        title={'SO'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.375748,
                            longitude: 8.532733
                        }}
                        pinColor="red"
                        title={'Don Leono'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.379817,
                            longitude: 8.530244
                        }}
                        pinColor="red"
                        title={'Milano'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.361157,
                            longitude: 8.550322
                        }}
                        pinColor="red"
                        title={'Stripped Pizza'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.371758,
                            longitude: 8.534842
                        }}
                        pinColor="red"
                        title={'Stripped Pizza'}
                        description={'20Chf: Pizza'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374021,
                            longitude: 8.522933
                        }}
                        pinColor="red"
                        title={'Avanti'}
                        description={'20Chf: Pizza'}
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