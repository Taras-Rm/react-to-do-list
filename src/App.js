import React from 'react';
import './App.css';
import AddItem from './components/AddItem';
import ToDoList from './components/ToDoList';

import mainState from './store/mainState';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoListItems: mainState,
      inputText: '',
      activeItemsCount: mainState.filter((item) => (item.isDone === false ? item : null)).length,
    };

    this.changeItemStatus = this.changeItemStatus.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  // change item status method
  changeItemStatus(itemId) {
    this.setState((prevState) => {
      const changedItemsArr = prevState.toDoListItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });
      let countArr = changedItemsArr.filter((item) => (item.isDone === false ? item : null));
      return {
        toDoListItems: changedItemsArr,
        activeItemsCount: countArr.length,
      };
    });
  }

  // update input text with input
  // input.inputText contain current input text
  updateInputText(inputText) {
    this.setState({ inputText: inputText });
  }

  // add item method
  addItem() {
    this.setState((prevState) => {
      const newItemsArr = [...prevState.toDoListItems];

      newItemsArr.unshift({
        id: Math.round(Math.random() * 10000),
        text: this.state.inputText,
        isDone: false,
      });

      return {
        toDoListItems: newItemsArr,
        activeItemsCount: prevState.activeItemsCount++,
        inputText: '',
      };
    });
  }

  // delete item method
  deleteItem(itemId) {
    this.setState((prevState) => {
      const newItemsArr2 = prevState.toDoListItems.filter((item) => {
        if (item.id !== itemId) {
          return { ...item };
        } else {
          return null;
        }
      });
      let countArr = newItemsArr2.filter((item) => (item.isDone === false ? item : null));
      return {
        toDoListItems: newItemsArr2,
        activeItemsCount: countArr.length,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h2 className="headerTitle">To do:</h2>
        <span className="activeItem">Active items: {this.state.activeItemsCount}</span>
        <ToDoList
          changeItemStatus={this.changeItemStatus}
          toDoListItems={this.state.toDoListItems}
          deleteItem={this.deleteItem}
        />
        <AddItem
          inputText={this.state.inputText}
          addItem={this.addItem}
          updateInputText={this.updateInputText}
        />
      </div>
    );
  }
}

export default App;
