import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class LinksScreen extends Component {

  static navigationOptions = {
    title: 'Klicke auf einen Button',
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
    const { container, fastfood, asiatisch, döner, italienisch, alles } = styles
    return (
        <View style={container}>
        <View style={fastfood}>
            <Button  
                title={"Fastfood"} 
                color="#FE9A2E" 
                onPress={() => this.props.navigation.navigate('fastfood')}
                />
        </View>
        <View style={asiatisch}>
        <Button 
            title={"Asiatisch"} 
            color="#FE9A2E" 
            onPress={() => navigate('asiatisch')}/>
        </View>
        <View style={döner}>
        <Button 
            title={"Döner"} 
            color="#FE9A2E" 
            onPress={() => navigate('döner')} />
        </View>
        <View style={italienisch}>
        <Button 
            title={"Italienisch"} 
            color="#FE9A2E" 
            onPress={() => navigate('italienisch')} />
        </View>
        <View style={alles}>
            <Button 
                title={"alles"} 
                color="black" 
                onPress={() => navigate('alles')} />
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
fastfood: {
    flex: 1,
    paddingVertical: 15,
},
asiatisch: {
    flex: 1,
    paddingVertical: 15,
},
döner: {
    flex: 1,
    paddingVertical: 15,
},
italienisch: {
    flex: 1,
    paddingVertical: 15,
},
alles: {
    flex: 1,
    paddingVertical: 15,
}
});
