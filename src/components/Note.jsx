import React from "react";

/*function Note(){
    return (
    <div className="note">
        <h1> this is heading</h1>
        <p> this is paragrap</p>
    </div>
    );
}*/

function Note(props) {
    function handleClick() {
      props.onDelete(props.id);
    }
  
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
      </div>
    );
  }
  
export default Note