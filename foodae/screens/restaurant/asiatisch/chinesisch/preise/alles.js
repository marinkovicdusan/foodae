import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Chinesischalles extends Component {

    static navigationOptions = {
        title: 'Chinesisch',
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
                            latitude: 47.394265,
                            longitude: 8.515248
                        }}
                        pinColor="red"
                        title={'Peking Garden'}
                        description={'Chinesisch All you can eat'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.371714,
                            longitude: 8.529498
                        }}
                        pinColor="red"
                        title={'Peking'}
                        description={'Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374911,
                            longitude: 8.524348
                        }}
                        pinColor="red"
                        title={'Suan Long'}
                        description={'Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.364739,
                            longitude: 8.533444
                        }}
                        pinColor="red"
                        title={'Suan Long'}
                        description={'Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.362879,
                            longitude: 8.531127
                        }}
                        pinColor="red"
                        title={'Lotusgarden'}
                        description={'Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374503,
                            longitude: 8.539025
                        }}
                        pinColor="red"
                        title={'Mishio'}
                        description={'Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.377350,
                            longitude: 8.543403
                        }}
                        pinColor="orange"
                        title={'Chop Stick'}
                        description={'10-20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.381903,
                            longitude: 8.533803
                        }}
                        pinColor="orange"
                        title={'China Restaurant'}
                        description={'13 oder 18Chf: Chinesisches Essen all you can eat'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.378518,
                            longitude: 8.531973
                        }}
                        pinColor="red"
                        title={'Hongxki'}
                        description={'20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.387839,
                            longitude: 8.518687
                        }}
                        pinColor="red"
                        title={'LY`s ASIA'}
                        description={'20Chf: Chinesisches Essen'}
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