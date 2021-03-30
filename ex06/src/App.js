import React, { Component } from "react";
import Table from './Table.js'

class App extends Component {
    state = {
        characters: [],
    }
    render() {
        removeCharacter = (index) => {
            const { characters } = this.state;
            this.setState({
                characters: characters.filter((characters, i) => {
                    return i !== index;
                }),
            })
        }
    return (
           <div className= "container">
               <Table characterData={characters} 
               removeCharacter={this.removeCharacter}/>
           </div>
       )
    }
}
export default App;