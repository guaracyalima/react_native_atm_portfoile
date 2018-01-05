
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import BarraNavegacao from './BarraNavegacao'

const detalhe_contato = require('../../assets/img/detalhe_contato.png')

export default class CenaContatos extends Component {
  render() {
    return (

      <View style={ css.scene }>
        <StatusBar backgroundColor = '#61bd8c'/>
        <BarraNavegacao voltar navigator={ this.props.navigator }  corDeFundo = '#61bd8c'></BarraNavegacao>

        <View style={ css.cabecalho }>
          <Image source={ detalhe_contato } />
          <Text style={ css.titulo }>Contatos</Text>
        </View>

        <View style={ css.detalheContatos }>
          <Text style={ css.txtDetalheCliente }>Tel: (000) 0000-0000 </Text>
          <Text style={ css.txtDetalheCliente }>Cell: (99) 9 9999-9999 </Text>
          <Text style={ css.txtDetalheCliente }>Email: queijo@parmesao.com</Text>
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
    color: '#61bd8c',
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
