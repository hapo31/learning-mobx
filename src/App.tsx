import * as React from "react";
import { TimerComponent } from "./component/Timer";
import { Provider } from "mobx-react";
import TimeStore from "./store/TimeStore";

const stores = {
  timer: new TimeStore(new Date())
};

export class App extends React.Component<{}> {
  render() {
    return (
      <Provider {...stores}>
        <TimerComponent />
      </Provider>
    );
  }
}
