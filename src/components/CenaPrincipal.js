
import React, { Component } from 'react';

import{ StyleSheet, Text, View, StatusBar, Image, TouchableHighlight} from 'react-native'
import BarraNavegacao from './BarraNavegacao'

const logo = require('../../assets/img/logo.png')
const menu_cliente = require('../../assets/img/menu_cliente.png')
const menu_contato = require('../../assets/img/menu_contato.png')
const menu_empresa = require('../../assets/img/menu_empresa.png')
const menu_servico = require('../../assets/img/menu_servico.png')

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={ css.scene }>
        <StatusBar
                    // hidden={ true }
                    backgroundColor = '#ccc'/>
        <BarraNavegacao></BarraNavegacao>

        <View style={ css.logo }>
          <Image source={ logo }/>
        </View>

        <View style={ css.menu }>

          <View style={ css.menuGroup }>

            <TouchableHighlight
                                underlayColor={'#b9c941'}
                                activeOpacity={0.3}
                                onPress={ () => { this.props.navigator.push({ id: 'clientes' }) }}>
              <Image style={ css.imgMenu } source={ menu_cliente }/>
            </TouchableHighlight>

            <TouchableHighlight
                                underlayColor={'#61bd8c'}
                                activeOpacity={0.3}
                                onPress={ () => { this.props.navigator.push({ id: 'contato' }) }}>
              <Image style={ css.imgMenu } source={ menu_contato }/>
            </TouchableHighlight>

          </View>

          <View style={ css.menuGroup }>
            <TouchableHighlight
                                underlayColor={'#ec7148'}
                                activeOpacity={0.3}
                                onPress={ () => { this.props.navigator.push({ id: 'empresa' }) }}>
              <Image style={ css.imgMenu } source={ menu_empresa }/>
            </TouchableHighlight>

            <TouchableHighlight
                                underlayColor={'#19d1c8'}
                                activeOpacity={0.3}
                                onPress={ () => { this.props.navigator.push({ id: 'servicos' }) }}>
              <Image style={ css.imgMenu } source={ menu_servico }/>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const css =  StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGroup: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
})
