import React, { Component } from 'react'
import {View, WebView } from 'react-native'


export const ParticlesView = (props) => {
    return (
      <View style={styles.containerStyle}>
        <WebView
                    source={require('./widget/particles.html')}
                    style={{ flex: 1, zIndex: 0 }}/>
        <View   style={[{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 1 },props.containerStyle]}>
             {props.children}
        </View>
      </View>
    );
  };

  const styles = {
    containerStyle: {
    flex:1
    }
  };



  

