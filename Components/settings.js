import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'settings',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Esta es la configuración!!</Text>
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