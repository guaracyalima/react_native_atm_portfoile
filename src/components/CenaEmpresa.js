
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import BarraNavegacao from './BarraNavegacao'

const menu_empresa = require('../../assets/img/detalhe_empresa.png')

export default class CenaContatos extends Component {
  render() {
    return (

      <View style={ css.scene }>
        <StatusBar backgroundColor = '#ec7148'/>
        <BarraNavegacao voltar navigator={ this.props.navigator } corDeFundo = '#ec7148' ></BarraNavegacao>

        <View style={ css.cabecalho }>
          <Image source={ menu_empresa } />
          <Text style={ css.titulo }>A Empresa</Text>
        </View>

        <View style={ css.detalheContatos }>
          <Text style={ css.txtDetalheCliente }> Lorem ipsun dolor sit a met </Text>
        </View>

      </View>
    );
  }
}

const css = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff'
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  titulo: {
    color: '#ec7148',
    fontSize: 40,
    marginLeft: 10,
    marginTop: 25
  },

  detalheContatos: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 3
  }
})
