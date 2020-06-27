import React from "react";

function About() {
  const [title, setTitle] = React.useState("About");
  return <div>{title}</div>;
}

function UpperCase(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(this.props);
    }
    render() {
      return <WrappedComponent />;
    }
  };
}

export default UpperCase(About);
