import { ListItem } from "./ListItem"

export const List = Props => {
  const renderList = () => {
    /* Use any one method */
    // 1. Using forEach
    // let data = []
    // list.forEach((text, index) => {
    //   data.push(<div>{text}</div>)
    // })
    // return data
    /*----------------------------------------------------*/
    // 2.Using map
    // return list.map((text, index) => (
    //   <div className="list-text-container" key={index}>
    //     <div className="list-index">{index + 1}.</div>
    //     <div className="list-text">{text} </div>
    //     <span
    //       className="material-symbols-outlined"
    //       onClick={() => {
    //         deleteFromList(index)
    //       }}
    //     >
    //       delete
    //     </span>
    //   </div>
    // ))
    /*----------------------------------------------------*/
    // 3.Using components
    return Props.list.map((item, index) => (
      <ListItem
        key={index}
        data={item}
        index={index}
        deleteItem={deleteFromList}
        completeItem={completeItem}
      ></ListItem>
    ))
  }
  const completeItem = (currentIndex, value) => {
    Props.setList(
      Props.list.map((item, index) =>
        index === currentIndex ? { ...item, isCompleted: value } : { ...item }
      )
    )
  }
  const deleteFromList = currentIndex => {
    /* Use any one method */
    //Using Fliter
    // setList(list.filter((text, index) => index != currentIndex))
    /*----------------------------------------------------*/
    //Using Splice
    Props.list.splice(currentIndex, 1)
    Props.setList([...Props.list])
    /*----------------------------------------------------*/
  }
  return <div className="list-container">{renderList()}</div>
}
