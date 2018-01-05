import React, { Component } from 'react';
import{ AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import CenaContatos from './src/components/CenaContatos'
import CenaEmpresa from './src/components/CenaEmpresa'
import CenaServicos from './src/components/CenaServicos'
export default class app5 extends Component {
  render() {
    return (
        // <Navigator
        //           initialRoute={ /* Objeto de rota*/}
        //           renderScene={ /* recebe a rota e o callback*/}/>

        <Navigator
                  initialRoute={ { id: 'dashboard' } }
                  renderScene={ (route, navigator) => {
                    if(route.id === 'dashboard'){
                      return(<CenaPrincipal navigator={ navigator }/>)
                    }
                    if(route.id === 'clientes'){
                      return( <CenaClientes navigator={ navigator }/>)
                    }
                    if(route.id === 'contato'){
                      return( <CenaContatos navigator={ navigator }/>)
                    }
                    if(route.id === 'empresa'){
                      return( <CenaEmpresa navigator={ navigator }/>)
                    }
                    if(route.id === 'servicos'){
                      return( <CenaServicos navigator={ navigator }/>)
                    }
                  }} />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
