import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker} from 'native-base'

export default class ClientRegistrationScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Cadastro de cliente'),
    };
  };

render(){
  return(
    <Container>
      <Content>
        <Form>
          <Button style={ {marginTop: 10} }
            full
            rounded
            success
            onPress={() => this.props.navigation.navigate('Dashboard1')}
          >
          <Text style= {{ color: 'white' }}> Continuar </Text> 
          </Button>          

        </Form>
      </Content>
    </Container>
    );
  }
}