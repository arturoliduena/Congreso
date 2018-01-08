import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import dataSede from '../assets/data'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
      },
      latitude: null,
      longitude: null,
      error: null,
      location: false,
      animating: true
    };
  };

  static navigationOptions = {
    title: 'map',
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (geo_success) => {
        this.setState({
          latitude: geo_success.coords.latitude,
          longitude: geo_success.coords.longitude,
          region: {
            latitude: geo_success.coords.latitude,
            longitude: geo_success.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          },
          error: null,
          location: true,
          animating: false
        });
        console.log('setState', this.state)
      },
      (geo_error) =>
      this.setState({ error: geo_error })
      ,
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  
    }
  

  render() {
    console.log('dataSede', dataSede)
    if (!this.state.location) 
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <ActivityIndicator 
            animating= {this.state.animating}
          />
        </View>
        )
    return (
      <View style={styles.container}>
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

          {dataSede.map((sede, i ) =>
              <Marker key={i}
              coordinate={{latitude: sede.coordinate.latitude ,longitude: sede.coordinate.longitude}}
              title={sede.name}
              />             
            )}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marker:{
    height: 25,
    width: 25,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 25 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.8)",

  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});