import React, {Component} from 'react';
import AnswerMultipleChoiceQuestion from './AnswerMultipleChoiceQuestion';
export default class SelectionQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selectArray=[
      '编码',
      '软件详细设计',
      '软件总体设计',
      '需求分析'
    ]
    return (
      <div>
        <AnswerMultipleChoiceQuestion selectArray={selectArray} label="1.除了测试程序外,黑盒测试还适用于对( )阶段的软件文档进行测试。"/>
      </div>
    )
  }
}