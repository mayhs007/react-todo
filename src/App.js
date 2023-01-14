import { useState } from "react"
import "./App.css"
import { List } from "./components/List/List"
import { ListItem } from "./components/List/ListItem"

const App = () => {
  const [list, setList] = useState([])
  const [text, setText] = useState("")
  const addToList = () => {
    if (text.length > 0) {
      /* Use any one method */
      // 1.Using concat
      // setList(list.concat(text))
      /*----------------------------------------------------*/
      // 2.Using spreadOperator
      // setList([...list, text])
      /*----------------------------------------------------*/
      // 3.Using array of Objects
      setList([
        ...list,
        {
          isCompleted: false, // Flag to say whether the item is completed item
          text: text,
        },
      ])
      setText("")
    }
  }
  const calculateTotalCompleted = () => {
    //Check if the list is empty
    if (list.length === 0) {
      return 0
    }
    return list.filter(item => item.isCompleted === true).length
  }
  return (
    <div className="main-container">
      <div className="header">
        <h1>TO DO LIST</h1>
      </div>
      <div className="total-container">
        <h2>
          Total {calculateTotalCompleted()}/{list.length}
        </h2>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter to-do"
          onChange={event => {
            setText(event.target.value)
          }}
          onKeyUp={event => {
            // if (event.keyCode === 13) {
            //   addToList(event.target.value)
            // }
            if (event.key === "Enter" && event.target.value.length > 0) {
              addToList(event.target.value)
              setText("")
            }
          }}
          value={text}
        ></input>

        <span className="material-symbols-outlined" onClick={addToList}>
          add
        </span>
      </div>
      <List list={list} setList={setList}></List>
    </div>
  )
}

export default App
