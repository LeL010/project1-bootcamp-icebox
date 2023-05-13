import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseHover() {
    this.setState((prevState) => ({
      isHovering: !prevState.isHovering,
    }));
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleClick() {
    // Do something when the button is clicked
    console.log("Button clicked!");
  }

  render() {
    const { isHovering } = this.state;
    //const backgroundImage = this.props.backgroundImage;
    const title = isHovering ? "Here you go!" : this.props.title;
    const buttonText = this.props.buttonText;

    const buttonComponent = isHovering && (
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
        as={Link}
        to="/ingredients"
      >
        {buttonText}
      </Button>
    );

    const divStyle = {
      //backgroundImage: `url("https://images.samsung.com/is/image/samsung/p6pim/sg/rr40b99c5ap-ss/gallery/sg-one-door-infinite-design-rr40b99c5ap-ss-534869237?$684_547_PNG$")`,
      height: "100vh",
      width: "100vw",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundColor: "grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      position: "relative", // add this to allow absolute positioning of the door
    };

    const doorStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundImage: `url("https://images.samsung.com/is/image/samsung/p6pim/sg/rr40b99c5ap-ss/gallery/sg-one-door-infinite-design-rr40b99c5ap-ss-534869273?$2052_1641_PNG$")`, // closed door image
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundColor: "grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      zIndex: 1,
      transition: "transform 1s ease-in-out", // add a transition effect
      transform: isHovering && "perspective(1150px) rotateY(160deg)",
      transformOrigin: "right", // set the rotation origin to the left side of the door
    };

    const containerStyle = {
      textAlign: "center",
      color: isHovering ? "black" : "white",
      position: "relative",
      fontStyle: "italic",
      zIndex: 2, // add a higher z-index to ensure the container is in front of the door
    };

    const gifStyle = {
      position: "absolute",
      top: "calc(50% + 110px)",
      left: 0,
      width: "100%",
      height: "100%",
      //zIndex: 2,
      opacity: 0.7,
      display: isHovering ? "block" : "none", // add conditional rendering
    };

    return (
      /*
      <div
        style={divStyle}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div style={doorStyle}></div> /* add the door div 
        <div className="container" style={containerStyle}>
          <h1>{title}</h1>
          {buttonComponent}
          <div style={gifStyle}>
            <img
              src="https://tenor.com/en-SG/view/fridge-dissapointed-no-food-my-excitement-for-food-is-now-gone-oh-nevermind-gif-17411460.gif"
              alt="Disappointed Fridge"
            />
          </div>
        </div>
      </div>
      */

      <div className="door-container">
        <div
          className="door"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <div className="door-front"></div>
          <div className="door-back">
            <div className="container" style={containerStyle}>
              <h1>{title}</h1>
              {buttonComponent}
              <div style={gifStyle}>
                <img
                  src="https://tenor.com/en-SG/view/fridge-dissapointed-no-food-my-excitement-for-food-is-now-gone-oh-nevermind-gif-17411460.gif"
                  alt="Disappointed Fridge"
                />
              </div>
            </div>
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
        // backgroundImage="https://img.us.news.samsung.com/us/wp-content/uploads/2018/01/14112220/180108_FH_AKG-Speaker_Full-Shot_w_homescreen_rgb_04.jpg"
        title="What's left in your fridge today?"
        buttonText="Ingredients"
      />
    );
  }
}

export default displayHomepage;
