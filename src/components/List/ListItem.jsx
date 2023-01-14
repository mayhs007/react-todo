export const ListItem = Props => {
  return (
    <div className="list-text-container" key={Props.index}>
      <div className={Props.data.isCompleted ? "list-text-completed" : "list-text"}>
        {Props.data.text}{" "}
      </div>
      <input
        type={"checkbox"}
        // checked={Props.data.isCompleted}
        onClick={event => {
          Props.completeItem(Props.index, event.target.checked)
        }}
      ></input>
      <span
        className="material-symbols-outlined"
        onClick={() => {
          Props.deleteItem(Props.index)
        }}
      >
        delete
      </span>
    </div>
  )
}
