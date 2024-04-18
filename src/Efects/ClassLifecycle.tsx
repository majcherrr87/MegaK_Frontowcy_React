import { Component } from "react";

type State = {
  counter: number;
};

export class ClssLifecycle extends Component<{}, State> {
  state = {
    counter: 0,
  };

  interval: number | null = null;

  componentDidMount(): void {
    console.log("Zamontowano");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    });
  }
}
