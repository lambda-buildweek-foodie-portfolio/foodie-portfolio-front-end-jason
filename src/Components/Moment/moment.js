import moment from "./moment";
import React, { Component } from 'react';

export default class Moment extends Component {


  static defaultProps = {
    format: 'MMMM Do YYYY, h:mm:ss a',
    liveUpdate: true,
  };

  componentDidMount() {
    const { liveUpdate, liveUpdateInterval } = this.props;

    if (liveUpdate || liveUpdateInterval) {
      const interval = liveUpdateInterval || 10000;
      this.interval = setInterval(() => this.forceUpdate(), interval);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { date, children, format, ...rest } = this.props;

    return (
      <div {...rest}>
        {children ?
            children(moment(date))
          :
            moment(date).format(format)
        }
      </div>
    );
  }
}