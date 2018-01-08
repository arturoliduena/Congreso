import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Text, View, TouchableHighlight, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

class LogIn extends Component {
  constructor (props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      user: {},
      unauth: false,
      isFetching: false,
      animating: true,
    };
   this.login = this.login.bind(this)
   this.goHome = this.goHome.bind(this)
  };

  static navigationOptions = {
    header: null,
  };

  goHome(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  login(){
    const {username, password} = this.state;
    this.setState({isFetching:true})

    this.goHome()
//     return fetch(loginRoute, {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({username: username, password})
//    }).then(response => { 
//       console.log("response", response)
//       if(response.ok){
//            response.json()
//             .then(data => {
//               this.setState({user: data, username: username, password: '', unauth: false})
//               this.props.saveToken (data.token)
//               this.props.setUser(username)
//               this.goHome()
//             })
//         }
        
//         else if(!response.ok){
//           this.setState({unauth: true, isFetching: false})
//         }
      
//       } 
//     )
//     .catch((error) => {console.error(error)});

  }

  render (){
    const { navigate } = this.props.navigation;
    const animating = this.state.animating
    if(this.state.isFetching){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <ActivityIndicator 
            animating= {animating}
          />
        </View>
      )
    }
    else if(!this.state.isFetching){ 
    return (
    <View style= {styles.container}>        
      <View style= {styles.imageContainer}>
        <Image
          style= {styles.logo}
          source= {require('../assets/react-logo.png')}
          resizeMode= "contain"
        />
      </View>
      <View >
        <Text style={{color: 'red', paddingLeft: 10, textAlign: 'center'}}>
          {this.state.unauth?'Usuario o Password incorrecto': ''}
        </Text>
      </View>
      <View style= {styles.inputContainer} >
        <View style= {styles.inputIconContainer}>
          <Ionicons name='ios-person-outline' size={25} color="#1ab394" />
          <TextInput
            style= {styles.input}
            placeholder= "Usuario"
            selectionColor= "#1ab394"
            onChangeText= {(username)=> this.setState({username})}
            value= {this.state.username}
          />
        </View>
        <View style= {styles.inputIconContainer}>
          <Ionicons name= 'ios-lock-outline' size= {25} color= "#1ab394" />
          <TextInput 
            style= {styles.input}
            placeholder= "Password"
            secureTextEntry
            selectionColor= "#1ab394"
            onChangeText= {(password)=> this.setState({password})}
            value= {this.state.password}
          />
        </View>
        <TouchableOpacity 
          style = {styles.button}
          activeOpacity= {0.5} onPress={this.login}>
          <View >
            <Text style= {styles.textButton}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    )}
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width, 
  },
  imageContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  logo: {
    flex:0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    paddingTop: 15,
    marginLeft: 5,
    width: Dimensions.get('window').width - 46,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0ECCF2',
    width: Dimensions.get('window'). width -31,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 3, elevation: 3
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default LogIn;