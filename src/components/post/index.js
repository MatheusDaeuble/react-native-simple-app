import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles'


export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.infos.title}</Text>
        <Text style={styles.signature}>{this.props.infos.signature}</Text>
        <View style={styles.bar}></View>
        <Text style={styles.content}>{this.props.infos.content}</Text>
      </View>
    );
  }
}



