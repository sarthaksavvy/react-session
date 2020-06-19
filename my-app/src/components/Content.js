import React from "react";

export default function Content() {
  const [images, setimages] = React.useState([
    "https://images.unsplash.com/photo-1592421817004-876c579a18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  ]);

  const [newImageUrl, setnewImageUrl] = React.useState("");

  function handleNewImage() {
    setimages([...images, newImageUrl]);
    setnewImageUrl("");
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <div>
      <div className="flex justify-between">
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} width="200" />
          </div>
        ))}
      </div>

      <div className="my-5">
        <input
          type="text"
          className="p-2 rounded shadow border border-gray-800"
          value={newImageUrl}
          onChange={handleChange}
        />
        <button
          className="p-2 bg-yellow-600 text-white rounded mx-2"
          onClick={handleNewImage}
        >
          Add Image
        </button>
      </div>
    </div>
  );
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
