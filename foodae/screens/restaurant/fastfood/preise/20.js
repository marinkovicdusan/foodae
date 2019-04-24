import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Fastfood20 extends Component {

    static navigationOptions = {
        title: 'Fastfood bis 20 Chf',
    }

    render() {
        return (
            <View style={styles.container}>

                <MapView style={styles.map}
                    region={{
                        latitude: 47.378564,
                        longitude: 8.538682,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}
                >

                    <MapView.Marker // Burger King
                        coordinate={{
                            latitude: 47.360611,
                            longitude: 8.532014
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.378162,
                            longitude: 8.535110
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.37978,
                            longitude: 8.541607
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.381765,
                            longitude: 8.537515
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'Burger Menü'}
                    />
                    <MapView.Marker // Chickeria
                        coordinate={{
                            latitude: 47.381357,
                            longitude: 8.528688
                        }}
                        pinColor="orange"
                        title={'Chickeria'}
                        description={'10-15Chf: Verschiedene Chicken Menüs'}
                    />

                    <MapView.Marker // Holy Cow!
                        coordinate={{
                            latitude: 47.380301,
                            longitude: 8.529583
                        }}
                        pinColor="orange"
                        title={'Holy Cow!'}
                        description={'Studentenrabatt: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // Holy Cow!
                        coordinate={{
                            latitude: 47.376696,
                            longitude: 8.537136
                        }}
                        pinColor="orange"
                        title={'Holy Cow!'}
                        description={'Studentenrabatt: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // Holy Cow!
                        coordinate={{
                            latitude: 47.375852,
                            longitude: 8.546406
                        }}
                        pinColor="orange"
                        title={'Holy Cow!'}
                        description={'Studentenrabatt: Verschiedene Burger Menüs'}
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