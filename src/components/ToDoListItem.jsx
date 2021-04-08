import React from 'react';


let ToDoListItem = (props) => {

    return (
        <div className="app_toDoItems_toDoItem">
            <div className={`itemText ${props.itemPrep.isDone ? 'itemText_Done' : 'itemText_Nondone'}`}>
                {props.itemPrep.text}
            </div>
            <div className="toDoButtons">
                <button className="item_check_btn" onClick={() => props.changeItemStatus(props.itemPrep.id)} checked={props.itemPrep.isDone}></button>
                <button className="item_delete_btn" onClick={() => { props.deleteItem(props.itemPrep.id) }}></button>
            </div>
        </div>
    );
}

export default ToDoListItem;
