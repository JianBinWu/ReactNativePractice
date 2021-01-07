import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';

const RankSingleCell = (props) => {
    onPress = () => {

    }
    return (
        <TouchableOpacity
            onPress={this.tapBtn}
        >
            <View style={{width: 85.5, height: 85.5, backgroundColor: props.item.color, justifyContent: 'center', alignItems: 'center', borderRadius: 31.5}}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>{props.item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const RankCell = (props) => {
    const data = [
        {name: '轻小说榜', color: '#FF7CAB'},
        {name: '段子榜', color: '#45E082'},
        {name: '小说榜', color: '#F4D727'}
    ]
    return(
        <View style={{backgroundColor: 'white', height: 173, flexDirection: 'column'}}>
            <View style={{ height: 53, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.name}>{props.name}</Text>
                <TouchableOpacity
                    onPress={this.tapBtn}
                >
                    <Text style={{ color: '#37C16E', fontSize: 13, right: 20 }}>全部</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                {
                    data.map((item, i) => (
                        <RankSingleCell item={item} />
                    ))
                }
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

export default RankCell;