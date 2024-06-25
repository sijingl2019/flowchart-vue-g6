import cardNode from './card-node'
import difyNode from './dify-node'
 
const obj = {
  cardNode,
  difyNode
}

export default function (G6) {
  Object.values(obj).forEach(item => {
    G6.registerNode(item.name, item.options, item.extendName)
  })
}