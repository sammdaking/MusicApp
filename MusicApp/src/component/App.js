import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import Card from './Card/Card';
import musicdata from './music-data.json';
import SeacrhBar from './SearchBar';

export default function App() {
  const [list, SetList] = useState(musicdata);

  const HandleSearchBar = text => {
    const filteredList = musicdata.filter(song => {

      const lowerWord = text.toLowerCase();
      const lowerSong = song.title.toLowerCase();
      return lowerSong.includes(lowerWord)


    })
    SetList(filteredList);
  }






  const holderRenderItem = ({ item }) => <Card info={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.tittle_text}>Music App</Text>
      <SeacrhBar propsGecır={HandleSearchBar} />
      <View style={{ backgroundColor: 'white' }}>
        <FlatList
          data={list}
          renderItem={holderRenderItem}
        />
      </View>

    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',

  },
  tittle_text: { fontSize: 20, textAlign: 'center' }


});