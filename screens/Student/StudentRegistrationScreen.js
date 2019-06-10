import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content, Header, Form, Input, Item, Button, Label, Picker} from 'native-base'

export default class StudentRegistrationScreen extends React.Component {
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

            <Item>
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
            </Item>

            <Button style={ {marginTop: 10} }
              full
              rounded
              success
              onPress={() => this.props.navigation.navigate('StudentRegistration2')}
            >
            <Text style= {{ color: 'white' }}> Continuar </Text> 
            </Button>          
          </Form>
        </Content>
      </Container>
    );
  }
}
