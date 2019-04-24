import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Döner extends Component {

    static navigationOptions = {
        title: 'Döner',
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
                            latitude: 47.378574,
                            longitude: 8.541047
                        }}
                        pinColor="orange"
                        title={'Zürich Bistro'}
                        description={'10Chf: Döner mit Getränk'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.372821,
                            longitude: 8.547654
                        }}
                        pinColor="orange"
                        title={'Take away Döner Imbiss'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.371834,
                            longitude: 8.518216
                        }}
                        pinColor="orange"
                        title={'Flash Take Away'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374155,
                            longitude: 8.5185593
                        }}
                        pinColor="orange"
                        title={'Restaurant 1001'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.375900,
                            longitude: 8.544307
                        }}
                        pinColor="orange"
                        title={'Sesam Falafel'}
                        description={'10Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.376368,
                            longitude: 8.520447
                        }}
                        pinColor="orange"
                        title={'Arat Pizzeria'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.377355,
                            longitude: 8.530747
                        }}
                        pinColor="orange"
                        title={'Kepi`s'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.379680,
                            longitude: 8.514182
                        }}
                        pinColor="orange"
                        title={'Restaurant Flora - New Point'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.379099,
                            longitude: 8.531005
                        }}
                        pinColor="orange"
                        title={'Palestine Grill'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.381362,
                            longitude: 8.549460
                        }}
                        pinColor="orange"
                        title={'Uni-Point'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.381888,
                            longitude: 8.531778
                        }}
                        pinColor="orange"
                        title={'Der Grüne Libanon'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.382934,
                            longitude: 8.537100
                        }}
                        pinColor="orange"
                        title={'New Point'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.385200,
                            longitude: 8.536500
                        }}
                        pinColor="orange"
                        title={'Milenium'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.385954,
                            longitude: 8.545514
                        }}
                        pinColor="orange"
                        title={'Monte Rigi'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.388515,
                            longitude: 8.519675
                        }}
                        pinColor="orange"
                        title={'Escher-Wyss Platz Kebab'}
                        description={'10-20Chf: Döner'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.380951,
                            longitude: 8.508416
                        }}
                        pinColor="orange"
                        title={'Ayverdis'}
                        description={'10-20Chf: Döner'}
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
