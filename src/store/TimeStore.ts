import { observable, computed, action } from "mobx";

export default class TimeStore {
  @observable private time: Date;

  constructor(time: Date) {
    this.time = time;
  }

  @computed
  get sec() {
    return this.time.getSeconds();
  }

  @computed
  get min() {
    return this.time.getMinutes();
  }

  @computed
  get hour() {
    return this.time.getHours();
  }

  @action.bound
  onTimeUpdate() {
    this.time = new Date();
  }
}
