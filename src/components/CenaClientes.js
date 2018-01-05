
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import BarraNavegacao from './BarraNavegacao'

const detalhe_cliente = require('../../assets/img/detalhe_cliente.png')
const cliente_um = require('../../assets/img/cliente1.png')
const cliente_dois = require('../../assets/img/cliente2.png')

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={ css.scene }>
        <StatusBar backgroundColor = '#ccc'/>
        <BarraNavegacao voltar navigator={ this.props.navigator } corDeFundo = '#b9c941' ></BarraNavegacao>

        <View style={ css.cabecalho }>
          <Image source={ detalhe_cliente } />
          <Text style={ css.titulo }>Nossos clientes</Text>
        </View>

        <View style={ css.detalheCliente }>
          <Image source={ cliente_um } />
          <Text style={ css.txtDetalheCliente }>Lorem ipsun dolor sit a met</Text>
        </View>

        <View style={ css.detalheCliente }>
          <Image source={ cliente_dois } />
          <Text style={ css.txtDetalheCliente }>Lorem ipsun dolor sit a met</Text>
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
    color: '#b9c941',
    fontSize: 40,
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
})
