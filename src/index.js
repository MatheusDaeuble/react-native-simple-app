
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Post from 'components/post'
import Header from 'components/header'
import styles from './styles'

const infos = {
  title: 'Aprendendo React Native',
  signature: 'Diego Schell Fernandes',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
}

const postList = [infos, infos, infos, infos, infos]

export default class App extends Component {

  renderPosts = () => {
    return postList.map((post, index)=> <Post key={index} infos = {post} /> )
  }

  render() {
    return (
      <View style={styles.container}>
      <Header/>
        <ScrollView>
          { this.renderPosts() }
        </ScrollView>
      </View>
    );
  }
}


