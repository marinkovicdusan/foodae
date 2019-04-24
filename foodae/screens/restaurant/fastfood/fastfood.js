import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class Fastfood extends Component {

  static navigationOptions = {
    title: 'Fastfood',
}

constructor (props) {
    super(props);
    this.state = {
        selectedIndex: 2,
        value : "Welche Küchenart?"
    }
    this.updateIndex = this.updateIndex.bind(this)
};
onSelect(value, label) {
    this.setState({value : value});
  }
  
updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    console.log(selectedIndex);
}

render() {
    const {navigate} = this.props.navigation;
    const { container, preise} = styles
    return (
        <View style={container}>
        <View style={preise}>
            <Button  
                title={"bis 10 Chf"} 
                color="green" 
                onPress={() => this.props.navigation.navigate('fastfood10')}
                />
        </View>
        <View style={preise}>
        <Button 
            title={"bis 20 Chf"} 
            color="#FE9A2E" 
            onPress={() => navigate('fastfood20')}/>
        </View>
        <View style={preise}>
        <Button 
            title={"Bis 30 Chf"} 
            color="red" 
            onPress={() => navigate('fastfood30')} />
        </View>
        <View style={preise}>
        <Button 
            title={"Alles"} 
            color="black" 
            onPress={() => navigate('fastfoodalles')} />
        </View>
    </View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column'
},
preise: {
    flex: 1,
    paddingVertical: 15,
}
});
