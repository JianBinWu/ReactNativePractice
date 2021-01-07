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

const ShangeShouYeSingleCell = (props) => {
    tapBtn = () => {

    }
    return (
        <TouchableOpacity
            onPress={this.tapBtn}
        >
        <View flexDirection={'row'} style={{width: 175, height: 110, alignItems: 'center'}}>
            <Image source={{ uri: props.item.uri }} style={{ width: 85, height: 110 }} />
            <View flexDirection={'column'} justifyContent={'space-between'} style={{height: 110}}>
            <Text style={{color: '#323232', fontSize: 12.5, fontWeight: '500', top: 5}}>{props.item.bookName}</Text>
            <Text style={{color: '#8B9094', fontSize: 11, bottom: 20}}>{props.item.author}</Text>
            <Text style={{color: '#8B9094', fontSize: 11, bottom: 5}}>{props.item.type}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const ShangShouYeCell = (props) => {
    tapBtn = () => {

    }
    tapShangShouYeBtn = () => {

    }
    return (
        <View style={{backgroundColor: 'transparent', paddingTop: 10}}>
        <View style={{backgroundColor: 'white', flexDirection: 'column'}}>
            <View style={{ height: 53, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.name}>{props.name}</Text>
                <TouchableOpacity
                    onPress={this.tapBtn}
                >
                    <Text style={{ color: '#37C16E', fontSize: 13, right: 20 }}>全部</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={this.tapShangShouYeBtn}
            >
            <Image source={require('./img/上首页/上首页.png')} style={{ width: 330, height: 108.5, alignSelf: 'center', bottom: 10}}/>
            </TouchableOpacity>
            <View flexDirection={'row'} justifyContent={'space-around'} style={{ flex:1, alignContent: 'space-around', flexWrap: 'wrap', paddingBottom: 10}}>
                {
                    global.sixData.map((item, i) => (
                        <ShangeShouYeSingleCell item={item} />
                    ))
                }
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

export default ShangShouYeCell;