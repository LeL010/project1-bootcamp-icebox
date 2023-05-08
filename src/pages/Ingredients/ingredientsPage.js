import React from "react";
import IngredientItems from "../../data/ingredientsDatabase";
import "./ingredients.css";

export class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    // State with list of all checked item
    this.state = {
      checked: [],
      checkList: IngredientItems,
    };
  }

  // Add/Remove checked item from list
  handleCheck = (item) => {
    this.setState((prevState) => {
      const checked = prevState.checked.includes(item)
        ? prevState.checked.filter((checkedItem) => checkedItem !== item)
        : [...prevState.checked, item];
      console.log("Updated checked array:", checked);
      return { checked };
    });
  };

  // Generate string of checked items
  checkedItems = () => {
    return this.state.checked.length
      ? this.state.checked.reduce((total, item) => {
          return total + ", " + item;
        })
      : "";
  };

  // Return classes based on whether item is checked
  isChecked = (item) => {
    const isChecked = this.state.checked.includes(item);
    console.log(item, "is checked:", isChecked);
    return isChecked ? "checked-item" : "not-checked-item";
  };

  // form submit handle
  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    Object.keys(this.state.checked).filter((item) => this.state.checked[item]);
  };

  render() {
    const { checkList, checked } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <div className="App-header">
            <div className="container">
              <h3>Check off what you have in your fridge:</h3>
              <br />
              <div className="checkList">
                {checkList.map((item, index) => (
                  <button
                    key={index}
                    className={
                      checked.includes(item)
                        ? "checked-item"
                        : "not-checked-item"
                    }
                    onClick={() => this.handleCheck(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {`You have these in your fridge: ${this.checkedItems()}`}
            <br />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
