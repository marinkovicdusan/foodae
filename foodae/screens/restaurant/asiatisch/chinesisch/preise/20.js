import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Chinesisch20 extends Component {

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