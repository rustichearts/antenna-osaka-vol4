import * as React from "react";
import * as p5 from "p5";
import sketch1 from "../../modules/sketch1";
// import sketch2 from "../../modules/sketch2";

// import logo from "../../logo.svg";
import "./index.css";

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  canvas1: React.RefObject<any>;
  canvas2: React.RefObject<any>;
  constructor(props: any) {
    super(props);
    this.canvas1 = React.createRef();
    this.canvas2 = React.createRef();
  }
  componentDidMount() {
    new p5(sketch1, this.canvas1.current);
    // new p5(sketch2, this.canvas2.current);
  }
  render() {
    if (this.state == null) return <React.Fragment/>;
    return (
      <React.Fragment>
        <div ref={this.canvas1}/>
        {/*<div ref={this.canvas2}/>*/}
      </React.Fragment>
    );
  }
}

export default App;
