
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import BarraNavegacao from './BarraNavegacao'

const detalhe_servicos = require('../../assets/img/detalhe_servico.png')

export default class CenaServicos extends Component {
  render() {
    return (

      <View style={ css.scene }>
        <StatusBar backgroundColor = '#19d1c8'/>
        <BarraNavegacao voltar navigator={ this.props.navigator } corDeFundo = '#19d1c8'></BarraNavegacao>

        <View style={ css.cabecalho }>
          <Image source={ detalhe_servicos } />
          <Text style={ css.titulo }>Nossos Serviços</Text>
        </View>

        <View style={ css.detalheContatos }>
          <Text style={ css.txtDetalheCliente }> - php </Text>
          <Text style={ css.txtDetalheCliente }> - JS </Text>
          <Text style={ css.txtDetalheCliente }> - Laravel </Text>
          <Text style={ css.txtDetalheCliente }> - React Native </Text>
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
    color: '#19d1c8',
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
