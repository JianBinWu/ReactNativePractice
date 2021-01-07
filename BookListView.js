import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';

const RecommendBookCell = (props) => {
    onPress = () => {

    }
    return (
        <TouchableOpacity
            onPress={this.tapBtn}
            style={{ flexDirection: 'column', height: 165}}
        >
            <Image style={{ width: 102, height: 132 }} source={{ uri: props.item.uri }} />
            <Text style={{ color: '#323232', fontSize: 12.5, fontWeight: '500', left: 6}}>{props.item.bookName}</Text>
            <Text style={{ color: '#8B9094', fontSize: 11, left: 6, top: 5}}>{props.item.author}</Text>
        </TouchableOpacity>
    );
}

const BookListView = (props) => {
    return (
        <View flexDirection={'row'} justifyContent={'space-around'} style={{ flex:1, alignContent: 'space-around', flexWrap: 'wrap', paddingBottom: 10}}>
                {
                    props.data.map((item, i) => (
                        <RecommendBookCell item={item} />
                    ))
                }
        </View>
    );
}

export default BookListView;