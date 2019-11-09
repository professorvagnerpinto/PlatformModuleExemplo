/**
 * Vídeo #10:Platform Module - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/platform-specific-code#platform-module
 * by: Vagner Pinto
 */

import React, {Component} from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

export default class PlatformModuleExemplo extends Component{

  /*
    Poderia utilizar o state para 'linkar' os objetos de Platform ao componente da View.
   */
  constructor(props){
    super(props);
    this.state={};
    const plataforma = Platform.OS;
  }

  obterPlataforma(){
    return (Platform.OS === 'android') ? 'Android' : 'iOS';
  }

  /*
    No JS dentro do componente foram demonstradas duas formas de acessar os objetos de Platform.
    Na constante styles foi demonstrado o uso do select.
   */
  render(){
    return(
        <View style={styles.body}>
          <Text style={styles.titulo}>Você está na plataforma {this.obterPlataforma()}, versão {Platform.Version}</Text>
          <Text style={styles.texto}>Este texto mudar a cor de acordo com a plataforma, Android ou IOs.</Text>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    //backgroundColor:'#222222'
  },
  titulo:{
    margin:10
  },
  texto:Platform.select({
    ios:{
      margin:10,
      fontSize:16,
      color: '#FF0000'
    },
    android:{
      margin:10,
      fontSize:16,
      color: '#0000FF'
    }
  })
});
