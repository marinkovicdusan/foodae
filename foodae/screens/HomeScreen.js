import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Willkommen bei Foodä',
  };

  FilterOptions() {
    this.props.navigation.navigate('Links')
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
      <MapView.Marker
        coordinate={{
          latitude: 47.378564,
          longitude: 8.538682
        }}
        pinColor="green"
        title={'Grün'}
        description={'Preis ist 10 Chf teuer oder weniger'}
      />
      <MapView.Marker
        coordinate={{
          latitude: 47.378575,
          longitude: 8.549621
        }}
        pinColor="orange"
        title={'Orange'}
        description={'Preis ist maximal 20 Chf teuer'}
      />
      <MapView.Marker
        coordinate={{
          latitude: 47.384463,
          longitude: 8.544905
        }}
        pinColor="red"
        title={'Rot'}
        description={'Preis ist maximal 30 Chf teuer'}
      />
      </MapView>
      <Button title={"Gahn go Foodä!"} color="#FE9A2E" onPress={_ => this.FilterOptions()} />
      </View>
    );
  }
};

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
});
