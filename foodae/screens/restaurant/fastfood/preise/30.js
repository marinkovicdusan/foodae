import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Fastfood30 extends Component {

    static navigationOptions = {
        title: 'Fastfood bis 30 Chf',
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
                    <MapView.Marker // Subway
                        coordinate={{
                            latitude: 47.389855,
                            longitude: 8.503616
                        }}
                        pinColor="red"
                        title={'Subway'}
                        description={'Personalisierte Sandwiches'}
                    />
                    <MapView.Marker // Subway
                        coordinate={{
                            latitude: 47.377555,
                            longitude: 8.527586
                        }}
                        pinColor="red"
                        title={'Subway'}
                        description={'Personalisierte Sandwiches'}
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