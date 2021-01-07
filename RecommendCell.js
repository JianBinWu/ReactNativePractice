import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image
} from 'react-native';
import BookListView from './BookListView'

const RecommendCell = (props) => {
    tapBtn = () => {

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
            <BookListView data={props.data}/>
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

export default RecommendCell;