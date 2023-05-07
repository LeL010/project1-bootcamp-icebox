import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Do something when the button is clicked
    console.log("Button clicked!");
  }

  render() {
    const backgroundImage = this.props.backgroundImage;
    const title = this.props.title;
    const buttonText = this.props.buttonText;

    const divStyle = {
      backgroundImage: `url(${backgroundImage})`,
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundColor: "grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    };

    const containerStyle = {
      textAlign: "center",
      color: "#ffffed",
      position: "relative", // Add position relative to the container
      fontStyle: "italic"
    };

    const gifStyle = {
      position: "absolute", // Position the GIF absolutely within the container
      top: "calc(50% + 110px)",
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2, // Set a higher z-index than the container
      opacity: 0.5, // Add transparency to the GIF
    };

    return (
      <div style={divStyle}>
        <div className="container" style={containerStyle}>
          <h1>{title}</h1>
          <Button
            variant="primary"
            size="lg"
            style={{
              width: "180px",
              height: "50px",
              padding: "5px",
              fontSize: "20px",
            }}
            onClick={this.handleClick}
            as={Link} to="/ingredients"
          >
            {buttonText}
          </Button>
          <div style={gifStyle}>
            <img src="https://tenor.com/en-SG/view/fridge-dissapointed-no-food-my-excitement-for-food-is-now-gone-oh-nevermind-gif-17411460.gif" alt="Disappointed Fridge" />
          </div>
        </div>
      </div>
    );
  }
}

class displayHomepage extends React.Component {
  render() {
    return (
      <Homepage
        backgroundImage="https://img.us.news.samsung.com/us/wp-content/uploads/2018/01/14112220/180108_FH_AKG-Speaker_Full-Shot_w_homescreen_rgb_04.jpg"
        title="What's left in your fridge today?"
        buttonText="Let's take a look!"
      />
    );
  }
}

export default displayHomepage;
