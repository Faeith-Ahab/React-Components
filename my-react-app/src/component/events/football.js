import React from "react";

class GoalButton extends React.Component {
    handleClick = () => {
        alert("You've scored a goal");
    }

    render() {
        return (
            <div className="GoalButton">
                <h1>My Football Alert</h1>
                <p><i>Click on button below</i></p>
                
                    <button className="goal" onClick={this.handleClick}>Goal</button>
                
                
            </div>
        );
    }
}

export default GoalButton;
