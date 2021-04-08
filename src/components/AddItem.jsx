import React from 'react';

// it`s add item form
let AddItem = (props) => {
    return (
        <div className="app_addItem">
            <div className="app_addItem_input">
                <span className="wordTask">Task</span>
                <input className="input" placeholder="What do you need to do ?" type="text"  onChange={(e) => props.updateInputText(e.target.value)} value={props.inputText} />
            </div>
            <div className="app_addItem_btn">
                <button onClick={() => props.addItem()}>Save item</button>
            </div>
        </div>
    );
}

export default AddItem;
