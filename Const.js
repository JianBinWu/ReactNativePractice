import global from "react-model/src/global"
import { Dimensions, NativeModules } from "react-native"

const { width, height } = Dimensions.get('window');
global.bookUrl = 'http://114.116.111.150:8020/Images/11c1502b-e075-418f-962c-220edaee25fb/11c1502b-e075-418f-962c-220edaee25fb.png';
global.screen = {
    width: width,
    height: height
}
global.sixData = [
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: true, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: true, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' }
]

global.threeData = [
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: true, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' },
    { uri: global.bookUrl, bookName: '剪破世灵', author: '峰峰', isFree: false, type: '历史 | 热门' }
]