import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      "events":null
    }
  }
  componentWillMount(){
    console.log("entro a component");
    var data = require('../assets/data.json');
    var color = (data.events.type === 'Diabetes') ? 'blue' : 'green'
      this.setState({
        "events":data.events,
      })
  }
      
componentDidMount(){
  console.log(this.state.events[0].title)
}

  static navigationOptions = {
    justifyContent: 'center',
    title: 'program',
  }

  render() {
    const {title, speakers, date, time}= this.state.events;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {this.state.events.map(i =>
          <TouchableOpacity key={i.id} style={{height: 120, borderBottomColor: 'black', borderBottomWidth: 3, borderLeftWidth: 20, 
          borderLeftColor: (i.type==='Diabetes') ? '#24b700': (i.type==='Cardiología') ? '#3e68d1': '#ffbf00',
           padding: 8}} onPress={() =>
          navigate('Single', { title: i.title, time: i.time, speakers: i.speakers, latitude: i.location.latitude, longitude: i.location.longitude })}>
          <Text style={styles.date}>{i.date}</Text>
          <Text>{i.time}</Text>
          <Text>{i.title}</Text>
          <Text>{i.speakers}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  date: {
    fontWeight: 'bold',
    fontSize:15,
  },
})