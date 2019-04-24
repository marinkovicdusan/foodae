import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default class Alles extends Component {

    static navigationOptions = {
        title: 'Alles',
    }

    FilterOptions() {
        this.props.navigation.navigate('restaurant')
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
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.360611,
                            longitude: 8.532014
                        }}
                        pinColor="orange"
                        title={'Zurigo Pasta'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.376740,
                            longitude: 8.547496
                        }}
                        pinColor="orange"
                        title={'La Pasta'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.379994,
                            longitude: 8.550759
                        }}
                        pinColor="orange"
                        title={'Hot Pasta'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.380345,
                            longitude: 8.535308
                        }}
                        pinColor="orange"
                        title={'Pasta Barn'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374533,
                            longitude: 8.533848
                        }}
                        pinColor="orange"
                        title={'Pasta Station'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.369533,
                            longitude: 8.541400
                        }}
                        pinColor="orange"
                        title={'Tschingg'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.360118,
                            longitude: 8.526038
                        }}
                        pinColor="red"
                        title={'Vapiano'}
                        description={'20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.373789,
                            longitude: 8.529713
                        }}
                        pinColor="orange"
                        title={'Tschingg'}
                        description={'10-20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.361000,
                            longitude: 8.547785
                        }}
                        pinColor="red"
                        title={'Vapiano'}
                        description={'20Chf: Pasta'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.375861,
                            longitude: 8.543718
                        }}
                        pinColor="red"
                        title={'Dieci'}
                        description={'20Chf: Pasta'}
                    />
                    <MapView.Marker // Burger King
                        coordinate={{
                            latitude: 47.360611,
                            longitude: 8.532014
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'10-20Chf: Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.378162,
                            longitude: 8.535110
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'10-20Chf: Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.37978,
                            longitude: 8.541607
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'10-20Chf: Burger Menü'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.381765,
                            longitude: 8.537515
                        }}
                        pinColor="orange"
                        title={'Burger King'}
                        description={'10-20Chf: Burger Menü'}
                    />

                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.366607,
                            longitude: 8.530392
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.368578,
                            longitude: 8.550816
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.375092,
                            longitude: 8.534171
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378114,
                            longitude: 8.533829
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.378575,
                            longitude: 8.549621
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.385553,
                            longitude: 8.535720
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // McDonalds
                        coordinate={{
                            latitude: 47.389855,
                            longitude: 8.503616
                        }}
                        pinColor="orange"
                        title={'Mc Donalds'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />

                    <MapView.Marker // Subway
                        coordinate={{
                            latitude: 47.389855,
                            longitude: 8.503616
                        }}
                        pinColor="red"
                        title={'Subway'}
                        description={'20Chf: Personalisierte Sandwiches'}
                    />
                    <MapView.Marker // Subway
                        coordinate={{
                            latitude: 47.377555,
                            longitude: 8.527586
                        }}
                        pinColor="red"
                        title={'Subway'}
                        description={'20Chf: Personalisierte Sandwiches'}
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
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // Holy Cow!
                        coordinate={{
                            latitude: 47.376696,
                            longitude: 8.537136
                        }}
                        pinColor="orange"
                        title={'Holy Cow!'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker // Holy Cow!
                        coordinate={{
                            latitude: 47.375852,
                            longitude: 8.546406
                        }}
                        pinColor="orange"
                        title={'Holy Cow!'}
                        description={'10-20Chf: Verschiedene Burger Menüs'}
                    />
                    <MapView.Marker //Chinesisch
                        coordinate={{
                            latitude: 47.394265,
                            longitude: 8.515248
                        }}
                        pinColor="red"
                        title={'Peking Garden'}
                        description={'20Chf: Chinesisch All you can eat'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.371714,
                            longitude: 8.529498
                        }}
                        pinColor="red"
                        title={'Peking'}
                        description={'20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374911,
                            longitude: 8.524348
                        }}
                        pinColor="red"
                        title={'Suan Long'}
                        description={'20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.364739,
                            longitude: 8.533444
                        }}
                        pinColor="red"
                        title={'Suan Long'}
                        description={'20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.362879,
                            longitude: 8.531127
                        }}
                        pinColor="red"
                        title={'Lotusgarden'}
                        description={'20Chf: Chinesisches Essen'}
                    />
                    <MapView.Marker
                        coordinate={{
                            latitude: 47.374503,
                            longitude: 8.539025
                        }}
                        pinColor="red"
                        title={'Mishio'}
                        description={'20Chf: Chinesisches Essen'}
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
                    <MapView.Marker //Döner
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