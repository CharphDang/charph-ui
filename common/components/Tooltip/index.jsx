import React, { Component } from 'react';
import './index.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      style: {
        left: 0,
        top: 0
      }
    };
  }
  onMouseEnter = e => {
    // 需要判断内容区是否超过可视区，超过的话，再弹出提示框
    const target = e.target;
    const targetRect = target.getBoundingClientRect();
    const targetScrollWidth = target.scrollWidth;

    console.log(targetRect.width, 'targetRect.width'); // Charph-log
    console.log(targetScrollWidth, 'targetScrollWidth'); // Charph-log
    if (targetRect.width < targetScrollWidth) {
      // 出现... 截断了，应该弹出内容了
      this.setState({
        show: true,
        style: {
          left: targetRect.width,
          top: 0,
          width: '100px'
        }
      });
    }
    console.log(target); // Charph-log

    console.log(targetRect); // Charph-log
  };
  onMouseLeave = e => {
    this.setState({
      show: false
    });
  };
  render() {
    const { children, content } = this.props;
    const { show, style } = this.state;
    return (
      <div className='tooltip' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {show && (
          <div style={style} className='tooltip__content'>
            {content}
          </div>
        )}
        {children}
      </div>
    );
  }
}

export default Tooltip;
