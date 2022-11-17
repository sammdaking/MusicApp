import { Text, View, Image } from 'react-native';
import React from 'react';
import Style from './Card.style';

const Card = ({ info }) => {
    return (

        <View style={Style.container}>
            <Image
                style={Style.image}
                source={{ uri: info.imageUrl }}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={Style.title}>{info.title}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={Style.artist}>{info.artist}</Text>
                    <Text style={Style.year}>{info.year}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'space-between' }} >
                    {/* {} arasına alıp ve ile bağladığımızda isSoldOut un false ve true durumuna göre Tükendi yazısı basılacak */}
                    {info.isSoldOut && <Text style={Style.stock}>TÜKENDİ</Text>}
                </View>
            </View>
        </View>

    )
}

export default Card

