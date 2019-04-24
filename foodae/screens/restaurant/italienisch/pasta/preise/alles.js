import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Pasta extends Component {

    static navigationOptions = {
        title: 'Pasta',
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
                            latitude: 47.360611,
                            longitude: 8.532014
                        }}
                        pinColor="orange"
                        title={'Zurigo Pasta'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.376740,
                            longitude: 8.547496
                        }}
                        pinColor="orange"
                        title={'La Pasta'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.379994,
                            longitude: 8.550759
                        }}
                        pinColor="orange"
                        title={'Hot Pasta'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.380345,
                            longitude: 8.535308
                        }}
                        pinColor="orange"
                        title={'Pasta Barn'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374533,
                            longitude: 8.533848
                        }}
                        pinColor="orange"
                        title={'Pasta Station'}
                        description={'Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.369533,
                            longitude: 8.541400
                        }}
                        pinColor="orange"
                        title={'Tschingg'}
                        description={'Pasta'}
                    />
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
                            latitude: 47.373789,
                            longitude: 8.529713
                        }}
                        pinColor="orange"
                        title={'Tschingg'}
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