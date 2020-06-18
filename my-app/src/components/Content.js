import React from "react";

export default function Content() {
  React.useEffect(() => {
    console.log("I am Content Component");
    return () => {
      console.log("Bye bye");
    };
  });

  return <div>I am a div</div>;
}

// export default class Content extends Component {
//   componentDidMount() {
//     console.log("I am Content component");
//   }

//   componentWillUnmount() {
//     console.log("Bye bye");
//   }

//   render() {
//     return <div>I am a div</div>;
//   }
// }
