import React, { useState } from 'react';
import global from 'react-model/src/global';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    FlatList
} from 'react-native';

const BossSingleCell = (props) => {
    tapBtn = ()=> {
    }
    return (
        <View style={{padding: 7.5, paddingTop: 0}}>
            <TouchableOpacity
            onPress={this.tapBtn}
        >
        <View style={{ flexDirection: 'column', backgroundColor: 'white', width: 150, height: 250, alignItems: 'center', justifyContent: 'space-between'}}>
            <View alignItems={'center'} top={15}>
            <Image source={{ uri: props.item.uri }} style={{ width: 102, height: 132 }} />
            <Text style={{color: '#323232', fontSize: 12.5, fontWeight: '500', top: 7}}>{props.item.bookName}</Text>
            <Text style={{color: '#8B9094', fontSize: 11, top: 9}}>{props.item.author}</Text>
            </View>
            <Text style={{color: '#8B9094', fontSize: 11, bottom: 30}}>{props.item.type}</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
}

const BossPushCell = (props) => {
    const data = [
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: true },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: false },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: false },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: true },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: false },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', type: '历史 | 热门', isFree: false }
    ]
    tapBtn = () => {
    }
    return (
        <View style={{height: 290, flexDirection: 'column'}}>
            <View style={{ height: 53, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.name}>{props.name}</Text>
                <TouchableOpacity
                    onPress={this.tapBtn}
                >
                    <Text style={{ color: '#37C16E', fontSize: 13, right: 20 }}>全部</Text>
                </TouchableOpacity>
            </View>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={data} renderItem={({item}) => <BossSingleCell item={item}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        color: '#5C6773',
        fontWeight: '700',
        left: 20
    },
})

export default BossPushCell;