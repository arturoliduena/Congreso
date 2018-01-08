import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

export default class App extends React.Component {
  constructor(props){
  	super(props);
    this.state={
      latitude: null,
      longitude: null,
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
    }
  };
}
  componentWillMount(){
    const properties = this.props.navigation.state.params
    this.setState({
      latitude: properties.latitude,
      longitude: properties.longitude,
      region: {
        latitude: properties.latitude,
        longitude: properties.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }    
    })
  }
  static navigationOptions = {
    title: 'single',
  }

  render() {
    const properties = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{properties.title}</Text>
        <Text style={styles.time}>{properties.date}</Text>
        <Text style={styles.time}>{properties.time}</Text>
        <Text>Speakers</Text>
        <View>
        <Image
          style={styles.photo}
          source={{uri: properties.photo}}
        />
        <Text>{properties.speakers}</Text>
        </View>
        <Text>Ubicación</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
          navigate('SingleMap', { latitude: this.state.latitude ,longitude: this.state.longitude })}>
          <Text style={{textAlign: 'center', lineHeight: 50}}>Còmo llegar</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 5,
    backgroundColor: '#fff',
    paddingLeft: 10
  },
  title: {
    fontSize: 30
  },
  time: {
    marginTop: 25,
    fontSize: 15
  },
  map: {
    height: 200,
    margin: 40
  },
  photo: {
    width: 50,
    height: 50
  },
  marker:{
    height: 25,
    width: 25,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.8)",
  },
  button:{
    borderRadius: 50,
    backgroundColor: "rgba(0,122,255,0.8)",
    width: 80,
    height:80,
    alignItems: 'center',
    alignSelf: 'center'
  }
});