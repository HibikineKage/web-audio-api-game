import React, {Component} from 'react';

export default class Canvas extends Component {
  componentDidMount() {
    const ctx = this.getContext();
    ctx.textAlign = 'center';
    ctx.font = '24px sans-serif';

    this.updateCanvas();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.updateCanvas();
    }
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  getContext() {
    return this.canvas.getContext('2d');
  }

  updateCanvas() {
    const ctx = this.getContext();
    const {
      store: { text },
      canvasWidth,
      canvasHeight
    } = this.props;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
  }

  render() {
    const {canvasWidth, canvasHeight} = this.props;
    return (
      <canvas
        ref={e => {this.canvas = e;}}
        id="canvas"
        width={canvasWidth}
        height={canvasHeight}>
      </canvas>
    )
  }
}

Canvas.defaultProps = {
  canvasWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  canvasHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) /2,
}
