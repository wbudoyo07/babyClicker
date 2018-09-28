import React from "react";
import MainContainer from "./componets/MainContainer"
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import Wrapper from "./componets/Wrapper";
import Card from "./componets/Card";
import babies from "./babyList.json";

class App extends React.Component {
//Set this state
state = {
    babies,
    currentScore : 0,
    highScore: 0,
    clicked: []
};

handleClick = (id) => {
    // check if the clicked array has id same as babies array. 
    if(this.state.clicked.indexOf(id) === -1 ) {
        
        // add score and shuffle the cards
        this.handleIncrement();
        this.shuffleCards();

        // push the id of the clicked babies images
        this.state.clicked.push(id);
        console.log(this.state.clicked);

    }
    else {

       this.resetGame();
    }
    
};

// increment  the score + 1 everytime it clicks
handleIncrement = () => {

    let currentScore = this.state.currentScore + 1;
    let highScore = this.state.highScore;
    this.setState({ 
        currentScore: currentScore
    });

    // if the current score higher than best score, replace the highest score from current score.
    if(currentScore > highScore ) {
        this.setState({ highScore :currentScore })
    }
    // Player win the game when it hits 10.
    else if (highScore === 10 ){
        alert("You Won!!!!");
    }
};

// reset the state back  to default  except the bestScore and shuffle the cards
resetGame = () => {
    alert("You Lost");
    this.setState({
        babies,
        currentScore : 0,
        clicked: []
    });

    this.shuffleCards();
}

// Randoming the order of cards array
shuffleCards = () => {
    const shuffleArray = this.state.babies;
    shuffleArray.sort(function(a,b) {
        return 0.5 - Math.random();
    });

    this.setState({ babies });
};

// render all the components
render() {
    return (
        <MainContainer>
            <Navbar />
            <Header currentScore = { this.state.currentScore } highScore = { this.state.highScore }/>
            <Wrapper>
                {this.state.babies.map(baby => (
                    <Card
                        id = { baby.id }
                        key = { baby.id }
                        name = { baby.name }
                        image = { baby.image }
                        handleClick = { this.handleClick  }
                    />
                ))};
            </Wrapper>           
        </MainContainer>
    )
};

};

export default App;