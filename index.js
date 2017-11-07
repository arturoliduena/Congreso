import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'index',
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('newscreen')}>
            <Text style= {styles.buttonText}>button</Text>
          </TouchableOpacity>
        
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
