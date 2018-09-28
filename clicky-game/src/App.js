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
};

shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
}

shuffleCard = () => {
    this.setState({})
}

handleClick =() => {

}
// render all the components
render() {
    return (
        <MainContainer>
            <Navbar />
            <Header currentScore = { this.state.currentScore }/>
            <Wrapper>
                {this.state.babies.map(baby => (
                    <Card
                        id = { baby.id }
                        key = { baby.id }
                        name = { baby.name }
                        image = { baby.image }
                        handleClick = { this.handleScore }
                    />
                ))};
            </Wrapper>           
        </MainContainer>
    )
};

};

export default App;