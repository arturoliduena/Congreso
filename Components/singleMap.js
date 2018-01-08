import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

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
      originlatitude: null,
      originlongitude: null,
      error: null,
      location: false,
      animating: true
    };
  };

  static navigationOptions = {
    title: 'singleMap',
  }

  componentWillMount(){
    const properties = this.props.navigation.state.params;
    navigator.geolocation.getCurrentPosition(
      (geo_success) => {
        this.setState({
          originlatitude: geo_success.coords.latitude,
          originlongitude: geo_success.coords.longitude,
          region: {
            latitude: (properties.latitude+geo_success.coords.latitude)/2,
            longitude: (properties.longitude+geo_success.coords.longitude)/2,
            latitudeDelta: Math.abs(geo_success.coords.latitude-properties.latitude)+ 0.1,
            longitudeDelta: Math.abs(geo_success.coords.longitude-properties.longitude)+ 0.1,
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
    const properties = this.props.navigation.state.params;
    const origin = {latitude: this.state.originlatitude, longitude: this.state.originlongitude}
    const destination = {latitude: properties.latitude, longitude: properties.longitude};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyB4Jszo35riQC8eKhe9IN_bMmb35uEvYKw';
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
         <MapViewDirections
         origin={origin}
         destination={destination}
         apikey={GOOGLE_MAPS_APIKEY}
         strokeWidth={3}
         strokeColor="hotpink"
       />
          <Marker
          coordinate={{latitude: this.state.originlatitude ,longitude: this.state.originlongitude}}
          title='You are here'
          >
            <View style= {styles.marker} />
          </Marker>
          <Marker
          coordinate={{latitude: properties.latitude ,longitude: properties.longitude}}
          title='You are here'
          >
            <View style= {styles.marker} />
          </Marker>

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

