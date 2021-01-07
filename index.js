import React, { Component, useState, useCallback } from 'react';
import {
  AppRegistry,
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Dimensions,
  FlatList,
  Image,
  DeviceEventEmitter
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import { Model } from 'react-model'
import RecommendCell from './RecommendCell'
import RankCell from './RankCell'
import RecommendDetailCell from './RecommendDetailCell'
import BossPushCell from './BossPushCell'
import ShangShouYeCell from './ShangShouYeCell'
import global from 'react-model/src/global';
import './Const.js'

const { width, height, scale } = Dimensions.get('window')
const loading = require('./loading.gif')
const baseUrl = 'http://114.116.111.150:8020'
const bookUrl = '/Images/11c1502b-e075-418f-962c-220edaee25fb/11c1502b-e075-418f-962c-220edaee25fb.png'
const advertiseImgUrl = '/Images/3ff94145-f9dd-4a4f-94a5-43d68928c1a2/3ff94145-f9dd-4a4f-94a5-43d68928c1a2.png'


const Header = (props) => {

  tapHome = () => {
    props.changeSelectedIndex(0)
  }

  tapLightStory = () => {
    props.changeSelectedIndex(1)
  }

  tapTongRen = () => {
    props.changeSelectedIndex(2)
  }

  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={this.tapHome}
      >
        <Text style={props.index == 0 ? styles.btnSelectedStyle : styles.btnTextStyle}>首页</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={this.tapLightStory}
      >
        <Text style={props.index == 1 ? styles.btnSelectedStyle : styles.btnTextStyle}>轻小说</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={this.tapTongRen}
      >
        <Text style={props.index == 2 ? styles.btnSelectedStyle : styles.btnTextStyle}>同人说</Text>
      </TouchableOpacity>
    </View>
  );
}

const SlideSchema = {
  state: {
    imgList: [
      'http://114.116.111.150:8020/Images/3ff94145-f9dd-4a4f-94a5-43d68928c1a2/3ff94145-f9dd-4a4f-94a5-43d68928c1a2.png',
      'http://114.116.111.150:8020/Images/3ff94145-f9dd-4a4f-94a5-43d68928c1a2/3ff94145-f9dd-4a4f-94a5-43d68928c1a2.png',
      'http://114.116.111.150:8020/Images/3ff94145-f9dd-4a4f-94a5-43d68928c1a2/3ff94145-f9dd-4a4f-94a5-43d68928c1a2.png',
      'http://114.116.111.150:8020/Images/3ff94145-f9dd-4a4f-94a5-43d68928c1a2/3ff94145-f9dd-4a4f-94a5-43d68928c1a2.png'
    ],
    loadQueue: [0, 0, 0, 0]
  },
  actions: {
    loaded: index => {
      return state => {
        state.loadQueue[index] = 1
      }
    }
  }
}

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        onLoad={() => {
          props.loadHandle(props.i)
        }}
        style={styles.image}
        source={{ uri: props.uri }}
      />
      {!props.loaded && (
        <View style={styles.loadingView}>
          <Image style={styles.loadingImage} source={loading} />
        </View>
      )}
    </View>
  )
}

const CustomBtn = (props) => {
  tapBtn = () => {
  }

  return (
    <TouchableOpacity
      onPress={this.tapBtn}
    >
      <Image source={props.uri} width={32} height={30}/>
      <Text style={styles.customBtn}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const CustomBigBtn = (props) => {
  tapBtn = () => {
  }

  return (
    <TouchableOpacity
      onPress={this.tapBtn}
    >
      <View style={styles.bigBtnView} flexDirection={'row'} justifyContent={'space-between'}>
        <Text style={{color: '#5C6773', fontWeight: "500", alignSelf: 'center', left: 17.5}}>{props.name}</Text>
        <View justifyContent={'flex-end'} flexDirection={'row'} alignSelf={'center'} alignItems={'center'}>
        <Image source={{uri: props.uri[1]}} 
        style={{width: ((width-50)/2/162*77-11)/66*51, height: ((width-50)/2/162*77-11), left: 15, zIndex: 1}}
        />
        <Image source={{uri: props.uri[0]}} 
        style={{width: ((width-50)/2/162*77-17)/60*46.5, height: ((width-50)/2/162*77-17), right: 11, zIndex: 0}}
        />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const HomePage = () => {
  const [{ useStore }] = useState(() => Model(SlideSchema))
  const [state, actions] = useStore()
  const loadHandle = useCallback((i) => {
    actions.loaded(i)
  }, [])
  const btnList = [
    { uri: require('./img/榜单/榜单_icon.png'), name: '榜单' },
    { uri: require('./img/分类/分类_icon.png'), name: '分类' },
    { uri: require('./img/社团/社团_icon.png'), name: '社团' },
    { uri: require('./img/活动/活动_icon.png'), name: '活动' },
    { uri: require('./img/新书/新书_icon.png'), name: '新书' }
  ]
  const bigBtnList = [
    { uri: [baseUrl+bookUrl, baseUrl+bookUrl], name: '同人小说'},
    { uri: [baseUrl+bookUrl, baseUrl+bookUrl], name: '玄幻空间'}
  ]
  return (
    <ScrollView style={{ backgroundColor: '#F4F5F9', width: width, flexDirection: 'column'}} showsVerticalScrollIndicator={false}>
      <View style={{paddingTop: 20}}>
      <View style={styles.swiperBox}>
        <Swiper loadMinimal loadMinimalSize={1} loop={true} autoplay={true} activeDotColor={'white'}>
          {
            state.imgList.map((item, i) => (
              <Slide
                loadHandle={loadHandle}
                uri={item}
                i={i}
                key={i}
                loaded={state.loadQueue[i]}
              />
            ))
          }
        </Swiper>
      </View>
      </View>
      <View style={styles.customBtnBox}>
        {
          btnList.map((item, i) => (
            <CustomBtn uri={item.uri} name={item.name}/>
          ))
        }
      </View>
      <View style={styles.customBigBtnBox}>
        {
          bigBtnList.map((item, i) => (
            <CustomBigBtn uri={item.uri} name={item.name}/>
            ))
        }
      </View>
      <RecommendCell name='精 • 编辑力推' data={global.sixData}/>
      <RecommendCell name='热 • 人气推荐' data={global.sixData}/>
      <View style={{padding: 20, height: 120}}>
      <Image source={{uri: baseUrl+advertiseImgUrl}} style={{borderRadius: 5, flex: 1}}></Image>
      </View>
      <RankCell name='魁 • 排行榜'/>
      <RecommendDetailCell name='文 • 轻小说推荐'/>
      <View style={{padding: 20, paddingBottom: 10,height: 120}}>
      <Image source={{uri: baseUrl+advertiseImgUrl}} style={{borderRadius: 5, flex: 1}}></Image>
      </View>
      <BossPushCell name='妙 • BOSS力推'/>
      <RecommendCell name='创 • 同人推荐' data={global.threeData}/>
      <RecommendCell name='幻 • 二次元推荐' data={global.threeData}/>
      <ShangShouYeCell name='秀 • 我要上首页' data={global.sixData}/>
    </ScrollView>
  );
}

const PageScrollView = (props) => {
  return (
    <ScrollView style={styles.pageScrollView} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(e) => {
        props.changeSelectedIndex(parseInt(e.nativeEvent.contentOffset.x / width))
      }} contentOffset={{ x: width * props.index }}
    >
      <HomePage></HomePage>
      <View style={{ backgroundColor: 'pink', width: width, height: height }}></View>
      <View style={{ backgroundColor: 'red', width: width, height: height }}></View>
    </ScrollView>
  );
}

const App = () => {
  const [selectedBtnIndex, setSelectedBtnIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Header index={selectedBtnIndex} changeSelectedIndex={(index) => {
        setSelectedBtnIndex(index)
      }} ></Header>
      <PageScrollView index={selectedBtnIndex} changeSelectedIndex={(index) => {
        setSelectedBtnIndex(index)
      }}></PageScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnStyle: {
    paddingLeft: 20
  },
  btnTextStyle: {
    fontSize: 15,
    color: "#8B9094"
  },
  btnSelectedStyle: {
    fontSize: 21,
    color: "#323232",
    fontWeight: "bold"
  },
  customBtn: {
    fontSize: 11,
    color: "#8B9094",
    fontWeight: "500",
    alignSelf: 'center'
  },
  pageScrollView: {
    width: width,
    height: height - 60,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
  },
  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  loadingImage: {
    width: 60,
    height: 60
  },
  swiperBox: {
    left: 20,
    width: width - 40,
    height: (width - 40) * 110 / 335,
    overflow: 'hidden',
    borderRadius: 5
  },
  customBtnBox: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  customBigBtnBox: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bigBtnView: {
    backgroundColor: '#E6E9F2',
    borderRadius: 6,
    width:(width-50)/2,
    height:(width-50)/2/162*77,
  }
});

// Module name
AppRegistry.registerComponent('App', () => App);