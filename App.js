import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker} from 'native-base'

/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import ClientRegistrationScreen from './screens/Client/ClientRegistrationScreen';
import StudentRegistrationScreen from './screens/Student/StudentRegistrationScreen';

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

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class WelcomeScreen extends Component {
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


class StudentRegistration2Screen extends React.Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Cadastro de aluno'),
    };
  };
  
render() {
    return (
      <Container>
        <Content>
          <Form>


            <Button style={ {marginTop: 10} }
              full
              rounded
              success
              onPress={() => this.props.navigation.navigate('Dashboard2')}
            >
            <Text style= {{ color: 'white' }}> Finalizar cadastro </Text> 
            </Button>          
          </Form>
        </Content>
      </Container>
    );
  }
}

class DashboardScreen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen2</Text>
      </View>
    );
  }
}

class Profile1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

class Projects1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Projetos</Text>
      </View>
    );
  }
}

class Idea extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nova ideia</Text>
      </View>
    );
  }
}

class VoluntarySearch extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>VoluntarySearch</Text>
      </View>
    );
  }
}

const DashboardTabNavigator1 = createBottomTabNavigator(
  {
    Profile1,
    Projects1,
    Idea,
    VoluntarySearch,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator1 = createStackNavigator(
  {
    DashboardTabNavigator1: DashboardTabNavigator1
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator1 = createDrawerNavigator({
  Dashboard1: {
    screen: DashboardStackNavigator1
  }
});


class DashboardScreen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen2</Text>
      </View>
    );
  }
}

class Profile2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

class Projects2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Projetos</Text>
      </View>
    );
  }
}

class Teams2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Equipes</Text>
      </View>
    );
  }
}

class ProjectsSearch2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Equipes</Text>
      </View>
    );
  }
}

const DashboardTabNavigator2 = createBottomTabNavigator(
  {
    Profile2,
    Projects2,
    Teams2,
    ProjectsSearch2,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator2 = createStackNavigator(
  {
    DashboardTabNavigator2: DashboardTabNavigator2
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator2 = createDrawerNavigator({
  Dashboard2: {
    screen: DashboardStackNavigator2
  }
});



const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Registration: RegistrationScreen,
  ClientRegistration: ClientRegistrationScreen,
  Dashboard1: AppDrawerNavigator1,
  StudentRegistration: StudentRegistrationScreen,
  StudentRegistration2: StudentRegistration2Screen,
  Dashboard2: AppDrawerNavigator2
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});