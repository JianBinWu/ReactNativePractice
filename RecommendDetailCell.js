import React, { useState } from 'react';
import global from 'react-model/src/global';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';
import BookListView from './BookListView'


const RecommendDetailSingleCell = (props) => {
    tapBtn = () => {

    }
    return (
        <TouchableOpacity
            onPress={this.tapBtn}
        >
            <View style={{ flexDirection: 'row', height: 132, justifyContent: 'space-around' }}>
                <Image source={{ uri: global.bookUrl }} style={{left: 2, width: 102, height: 132 }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: global.screen.width - 140 }}>
                    <Text style={{ fontSize: 12.5, color: '#323232', fontWeight: '500' }}>娘子她千娇百媚</Text>
                    <Text style={{ fontSize: 11, color: '#8B9094' }}>白元</Text>
                    <Text style={{ fontSize: 11, color: '#8B9094' }}>一曲琵琶耳中绕，三弦两声扣心扉，都为事事难如愿，可问己心明是非？</Text>
                    <Text style={{ fontSize: 11, color: '#8B9094' }}>历史 | 热门</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const RecommendDetailCell = (props) => {
    const data = [
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: true },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false },
        { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false }
    ]
    tapBtn = () => {
        alert('1231123')
    }
    return (
        <View style={{ backgroundColor: 'transparent', paddingTop: 10 }}>
            <View style={{ backgroundColor: 'white', height: 378, flexDirection: 'column' }}>
                <View style={{ height: 53, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.name}>{props.name}</Text>
                    <TouchableOpacity
                        onPress={this.tapBtn}
                    >
                        <Text style={{ color: '#37C16E', fontSize: 13, right: 20 }}>全部</Text>
                    </TouchableOpacity>
                </View>
                <View flexDirection={'column'} height={325}>
                    <RecommendDetailSingleCell />
                    <BookListView data={data}/>
                </View>
            </View>
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

export default RecommendDetailCell;