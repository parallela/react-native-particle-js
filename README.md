# react-native-particle-js
a javascript animation for react native, using ParticleJs package

Installation
npm install --save react-native-particle-js

How to use
Code
Example:

import {ParticlesView} from 'react-native-particle-js'

class App extends Component{
  
  render() {
    return (
      <ParticlesView containerStyle={styles.container}>
          <Text>mmama's spaghetty</Text>
      </ParticlesView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },


braught to you by wassimhennoune by <3
