
import React, { Component } from 'react';

import{ StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

const btn_voltar = require('../../assets/img/btn_voltar.png')
export default class BarraNavegacao extends Component {
  render() {
    if( this.props.voltar ){
      return (
        <View style={ [css.barraTitulo, { backgroundColor: this.props.corDeFundo }] }>
          <TouchableHighlight
                              underlayColor={this.props.corDeFundo}
                              activeOpacity={0.3}
                              onPress={ () => {
            this.props.navigator.pop()
          }}>
              <Image source={ btn_voltar } />
          </TouchableHighlight>
          <Text style={ css.titulo }>ATM Consultoria</Text>
        </View>
      );
    }
    return (
      <View style={ css.barraTitulo }>
        <Text style={ css.titulo }>ATM Consultoria</Text>
      </View>
    );
  }
}

const css = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    paddingTop: 20,
    height: 60,
    flexDirection: 'row'
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
})
