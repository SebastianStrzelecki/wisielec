import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './keyboard';
import Words from './words.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      word: "",
      disabled: false,
      letter:[],
      UserLetter:"",
      Live:4
    }
  }

  componentDidMount(){
    this.loadWords();
  }

  //Losuje słowo
  loadWords(){
    const random = Math.floor(Math.random() * Words.easy.length) + 0  ;
    this.setState({
      word: Words.easy[random].split('')
      })
    this.createEmptyField(Words.easy[random]);
  }

  // Zwraca tablice indexów
  CheckIndexOf = (letterS) => {
    const ArrayLetter = this.state.word;
    return ArrayLetter.reduce(function(a, e, i) {
      if (e === letterS)
        a.push(i);
     return a;
    }, []);
    
  }

  //Sprawdza czy wygrałeś
  CheckWIN = (live) =>{
    if(live === 0){
      this.setState({
        disabled:true
      })
    }
    if(this.state.letter.indexOf("_") == -1)
    {
     console.log("WIN")
    }
  }

  onClick = (e) => {
    
      e.target.disabled=true;

      const CheckIndex = this.CheckIndexOf(e.target.value);
      let live = this.state.Live;
      if(CheckIndex.length === 0)
      {
        live= live-1;
      this.setState(prevState => ({
        Live: prevState.Live - 1
      })); 
      }
     else{
      this.getAnswer(e.target.value,CheckIndex);
     }
     this.CheckWIN(live);
  }

  //Uzupełnia zakrytą wersję tablicy 
  getAnswer = (arr,index) =>{
    let ArrCopy = this.state.letter;
    for(let i = 0; i < index.length;i++){
      ArrCopy[index[i]]=arr;
    }
    this.setState({
      letter: ArrCopy
    })
  }

//Utwórz puste pola
  createEmptyField = (word) => {
		let coveredWord = [];
		for (var i = 0; i < word.length; i++) {
			coveredWord.push("_")
    }
	this.setState({letter: coveredWord})
}



  render() {
    let answer = this.state.letter.join("");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Twoje: {this.state.Live==0 ? "Koniec Gry" : this.state.Live}</h1>
          <h2 className="Answer">{answer}</h2>
          <Keyboard onClickkeys={this.onClick} isDisabled={this.state.disabled}/>
    
        </header>
      </div>
    );
  }
}

export default App;
