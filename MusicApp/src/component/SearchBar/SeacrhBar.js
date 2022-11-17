import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Style from './SearchBar.Style';

export default function SeacrhBar(props) {
  return (
    <View style={Style.container} >
      <TextInput
        placeholder="Saerch a Music"
        onChangeText={props.propsGecır} />

    </View>
  );
};