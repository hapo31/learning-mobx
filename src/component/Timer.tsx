import * as React from "react";
import { render } from "react-dom";
import { inject, observer } from "mobx-react";

import TimeStore from "../store/TimeStore";

export type TimerComponentProps = {
  timer?: TimeStore;
};

export type TimerComponentState = {
  timer: NodeJS.Timer;
};

@inject("timer")
@observer
export class TimerComponent extends React.Component<
  TimerComponentProps,
  TimerComponentState
> {
  componentWillMount() {
    this.setUpdateTimer();
  }

  componentWillUnmount() {
    this.clearUpdateTimer();
  }

  render() {
    if (!this.props.timer) {
      return null;
    }
    const { sec, min, hour } = this.props.timer;
    return (
      <>
        <div className="timer">
          {hour}:{min}:{sec}
        </div>
      </>
    );
  }

  private timeUpdate = () => {
    if (this.props.timer) {
      this.props.timer.onTimeUpdate();
    }
  };

  private setUpdateTimer = () => {
    const s = new Date().getTime();
    return setTimeout(() => {
      this.timeUpdate();
      this.setState({ timer: this.setUpdateTimer() });
    }, 999 - (s - new Date().getTime()));
  };

  private clearUpdateTimer = () => {
    clearTimeout(this.state.timer);
  };
}
