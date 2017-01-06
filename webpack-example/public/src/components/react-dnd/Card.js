import React, {PropTypes,Component} from 'react';
import { DragSource } from 'react-dnd';  //可以被拖动的组件
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };  //拖拽刚刚开始的时候吧参数注入
  }
}; //必须的参数，对象，每个值都是一个function，就是拖拽的某个时刻触发的函数

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}  //这个函数是固定的

// const propTypes = {
//   text: PropTypes.string.isRequired,
//   isDragging: PropTypes.bool.isRequired,
//   connectDragSource: PropTypes.func.isRequired
// };
//
// Card.propTypes = propTypes;

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isDragging, connectDragSource, text } = this.props;  //前两个参数不是你传的
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1,width:'200px',height:'200px',backgroundColor:'red',position:'absolute'}}>
        {text}
      </div>
    );
  }
}

export default DragSource('aaa', cardSource, collect)(Card);
//第一个参数：只要拖拽对象和被放入的对象第一个参数相同就可以放进去呀
