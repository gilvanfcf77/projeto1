/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBFIeoZ9IEBFB7ZhBbYbN3PKsvnXIDUhOs",
  authDomain: "projeto1-27112.firebaseapp.com",
  databaseURL: "https://projeto1-27112.firebaseio.com",
  projectId: "projeto1-27112",
  storageBucket: "projeto1-27112.appspot.com",
  messagingSenderId: "423920435240",
  appId: "1:423920435240:web:8d2268382195d028"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label, Picker} from 'native-base'

class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };

  }


  loginUser = (email, password) => {
    try{

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        console.log(user)

      })

    }

    catch(error){
      console.log(error.toString())

    }  

  }


  signUpUser = (email, password) =>{
    try{
      if(this.state.password.length<6){
        alert("Digite pelo menos 6 caracteres")
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)

    }

    catch(error){
      console.log(error.toString())

    }    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>

          <Item floatingLabel>
            <Label>Senha</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>

          <Button style={ {marginTop: 10} }
            full
            rounded
            dark
            onPress = {() => this.loginUser(this.state.email, this.state.password)}
  
          >
          <Text style= {{ color: 'white' }}>Login</Text> 
          </Button>


          <Text style={ {marginTop: 20, textAlign: 'center'} }> 
            Sua primeira vez aqui? 
          </Text>
          <Button style={ {marginTop: 10} }
            full
            rounded
            dark
            onPress={() => this.props.navigation.navigate('Registration')}

          >

          <Text style= {{ color: 'white' }}> Cadastre-se </Text> 
          </Button>          
        </Form>
      </Container>
    );
  }
}

class RegistrationScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Tela de cadastro'),
    };
  };

render() {
    return (
      <Container>
        <Text>Tela de cadastro</Text>

        <Button style={ {marginTop: 10} }
            full
            rounded
            dark
            onPress={() => this.props.navigation.navigate('ClientRegistration')}
  
          >
          <Text style= {{ color: 'white' }}>Cliente</Text> 
        </Button>

        <Button style={ {marginTop: 10} }
            full
            rounded
            dark
            onPress={() => this.props.navigation.navigate('StudentRegistration')}

          >
          <Text style= {{ color: 'white' }}> Aluno</Text> 
        </Button>
      
      </Container>
    );
  }
}

class ClientRegistrationScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Cadastro de cliente'),
    };
  };

render(){
  return(
    <Text>Cadastro de cliente</Text>

    );

}

}

class StudentRegistrationScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Cadastro de aluno'),
    };
  };
  
constructor(props) {
    super(props);
    this.state = {
      branches: [
        { address_line: 'address 1', id: 1 },
        { address_line: 'address 2', id: 2 },
        { address_line: 'address 3', id: 3 },
        { address_line: 'address 4', id: 4 },
        { address_line: 'address 5', id: 5 }],
      selected1: 1
    };
  }

  onBranchSelected(value) {
    this.setState({
      selectedBranch: value
    });
  }

render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome Completo</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              style={{ width: undefined }}
              selectedValue={"key0"}
            >
              <Picker.Item label="1º Semestre" value="key0" />
              <Picker.Item label="2º Semestre" value="key1" />
              <Picker.Item label="3º Semestre" value="key2" />
              <Picker.Item label="4º Semestre" value="key3" />
              <Picker.Item label="5º Semestre" value="key4" />
              <Picker.Item label="6º Semestre" value="key5" />
              <Picker.Item label="7º Semestre" value="key6" />
              <Picker.Item label="8º Semestre" value="key7" />
            </Picker>

            <Button style={ {marginTop: 10} }
              full
              rounded
              success
            >
            <Text style= {{ color: 'white' }}> Continuar </Text> 
            </Button>          
          </Form>
        </Content>
      </Container>
    );
  }
}



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Registration: RegistrationScreen,
    StudentRegistration: StudentRegistrationScreen,
    ClientRegistration: ClientRegistrationScreen

  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
