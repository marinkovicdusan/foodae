import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Fastfood10 extends Component {

    static navigationOptions = {
        title: 'Fastfood bis 10 Chf',
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

                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.366607,
                            longitude: 8.530392
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.368578,
                            longitude: 8.550816
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.375092,
                            longitude: 8.534171
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378114,
                            longitude: 8.533829
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.385553,
                            longitude: 8.535720
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.389855,
                            longitude: 8.503616
                        }}
                        pinColor="green"
                        title={'Mc Donalds'}
                        description={'Verschiedene Burger Menüs'}
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