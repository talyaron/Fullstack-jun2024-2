import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import calls from "../../pics/calls.png"

export default class Calls extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Image source={calls} style={{ width: 550, height: 700 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
