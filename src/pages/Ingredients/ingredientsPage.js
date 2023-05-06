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
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <div className="App-header">
            <h3>Check off what you have in your fridge:</h3>
            <div className="checkList">
              {/* this following code caused a lot of pain and kept rendering "checked-item" regardless. 
              Guessing that it is the conditional statement that caused it */}
              {/* {this.state.checkList.map((item, index) => (
                <div key={index}>
                  <button
                    className={
                      this.isChecked(item) ? "checked-item" : "not-checked-item"
                    }
                    onClick={() => this.handleCheck(item)}
                  >
                    {item}
                  </button>
                </div>
              ))} */}
              {this.state.checkList.map((item, index) => {
                const isChecked = this.state.checked.includes(item);
                const className = isChecked
                  ? "checked-item"
                  : "not-checked-item";

                return (
                  <button
                    key={index}
                    className={className}
                    onClick={() => this.handleCheck(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div>{`You have these in your fridge: ${this.checkedItems()}`}</div>
            <br />
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

/*
import Checkbox from "../../components/checkbox";
import {recipes}  from "../../data/recipesDatabase";
import { matchResults } from "../../utils/utils";

const OPTIONS = ["One", "Two", "Three"];

class IngredientsInput extends React.Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    const inputRange = [];

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        inputRange.push(checkbox);
      });
    const output = matchResults(inputRange,recipes)
    console.log(output)
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}

                  <div className="form-group mt-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary mr-2"
                      onClick={this.selectAll}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary mr-2"
                      onClick={this.deselectAll}
                    >
                      Deselect All
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>


export default IngredientsInput;
*/
