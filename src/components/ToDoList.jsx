import React from 'react';
import ToDoListItem from './ToDoListItem';

let ToDoList = (props) => {
    let items = props.toDoListItems.length === 0 ? 
    'You have no items' : 
    props.toDoListItems.map((item) => <ToDoListItem key={item.id} itemPrep={item} changeItemStatus={props.changeItemStatus} deleteItem={props.deleteItem}/>)

    return (
      <div className="app_toDoItems">
        {items}
      </div>
    );
}

export default ToDoList;
