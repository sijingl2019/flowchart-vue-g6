/**
 * Created by OXOYO on 2019/7/3.
 *
 * 封装G6
 */

import G6 from '@antv/g6'
import registerNode from './node/index'

// 注册自定义边
registerNode(G6)

export default G6
