import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, SetTodos] = useState([]);
  const inputRef = useRef();
  const EditRef = useRef();
  const [inputVisible, setinputVisible] = useState(false);
  const [EditDone, setEditDone] = useState(false);
  function handleClick() {
    const Text = inputRef.current.value;
    if (Text != "") {
      const NewItem = { completed: false, Text };
      SetTodos([...todos, NewItem]);
      inputRef.current.value = "";
    }
  }
  const HandleDone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed;
    SetTodos(newtodos);
    setShowAlert(true);
  }

  const HandleDelete = (index) => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    SetTodos(newtodos);
  }

  const HandleEdit = () => {
    setinputVisible(!inputVisible)
  }

  const EditDoneMethod = (index) => {
    const newtodos = [...todos];
    newtodos[index].Text = EditRef.current.value;
    SetTodos(newtodos);
    setinputVisible(!inputVisible);
  }

  return (
    <div className="App">
      <div className="TodoSection">
        <div className="container">
          <div className="TodoApp">
            <h2>TO DO List App</h2>
            <div className="inputField">
              <input ref={inputRef} type="text" placeholder="Enter a Task To-do..." />
              <button type="submit" onClick={handleClick}>Add</button>
            </div>
            <ul className="list">
              {
                todos.map(({ Text, completed }, index) => {
                  return (
                    <>
                      <div key={index} className={completed ? "taskBox Done" : "taskBox"}>
                        <li>
                          <input type="checkbox" onClick={() => {
                            HandleDone(index)
                          }} name="" id="" />
                          {Text}
                        </li>
                        <button onClick={() => HandleDelete(index)}>
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                        {/* <button onClick={() => HandleEdit}>
                          <FontAwesomeIcon icon={faPen} />
                        </button> */}


                        {/* <div className={inputVisible ? "EditBox Show" : "EditBox"}>
                          <input type="text" ref={EditRef} name="" id="" />
                          <button type="button" onClick={() => EditDoneMethod}>Edit</button>
                        </div> */}
                      
                      </div>
                    </>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;