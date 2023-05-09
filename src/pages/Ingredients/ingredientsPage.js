import React from "react";
import { searchRecipes } from "../../utils/utils";
import { recipes } from "../../data/recipesDatabase";
import { withRouter } from "../../hooks/withRouter";

// import IngredientItems from "./ingredientsList";
import IngredientItems from "../../data/ingredientsDatabase";

class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    // State with list of all checked item
    this.state = {
      checked: [],
      checkList: IngredientItems,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // Add/Remove checked item from list
  handleCheck = (event) => {
    var updatedList = [...this.state.checked];
    if (event.target.checked) {
      updatedList = [...this.state.checked, event.target.value];
    } else {
      updatedList.splice(this.state.checked.indexOf(event.target.value), 1);
    }
    this.setState({ checked: updatedList });
  };

  // Generate string of checked items
  checkedItems = () => {
    return this.state.checked.length
      ? this.state.checked.reduce((total, item) => {
          return total + ", " + item;
        })
      : "";
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    const selectedOptions = this.state.checked;
    //const UrlParameters = selectedOptions.join("+");
    const filterList = searchRecipes(recipes, selectedOptions);

    this.props.navigate(`/filteredrecipes`, {
      state: { array: filterList, checkedBoxes: selectedOptions },
    });
    console.log(selectedOptions);
  };

  // Return classes based on whether item is checked
  isChecked = (item) =>
    this.state.checked.includes(item) ? "checked-item" : "not-checked-item";

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <div className="App-header">
            <br />
            <br />
            <h3>Check off what you have in your fridge:</h3>
            <div className="checkList">
              {this.state.checkList.map((item, index) => (
                <div key={index}>
                  <input
                    value={item}
                    type="checkbox"
                    onChange={this.handleCheck}
                  />
                  <span className={this.isChecked(item)}>{item}</span>
                </div>
              ))}
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

export default withRouter(IngredientList);

/*
import Checkbox from "../../components/checkbox";
import { recipes } from "../../data/recipesDatabase";
import { matchResults } from "../../utils/utils";

const OPTIONS = ["mushrooms", "guacomolo", "tomatoes", "beef"];

class IngredientList extends React.Component {
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
    
    console.log(inputRange);
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
      </div>
    );
  }
}
export { IngredientList };
*/
