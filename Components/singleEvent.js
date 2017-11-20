import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
    this.setState({
      latitude: this.props.navigation.state.params.latitude,
      longitude: this.props.navigation.state.params.longitude,
      region: {
        latitude: this.props.navigation.state.params.latitude,
        longitude: this.props.navigation.state.params.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }    
    })
  }
  static navigationOptions = {
    title: 'single',
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
        <Text style={styles.time}>{this.props.navigation.state.params.time}</Text>
        <MapView
          style={styles.map}
          region={this.state.region}
        >
          <Marker
          coordinate={{latitude: this.state.latitude ,longitude: this.state.longitude}}
          title='You are here'
          >
            <View style= {styles.marker} />
          </Marker>


        </MapView>
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
  marker:{
    height: 25,
    width: 25,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 25 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.8)",

  }
});