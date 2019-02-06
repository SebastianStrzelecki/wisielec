import React, { Component } from 'react';
import './App.css';
import Keyboard from './keyboard';
import Words from './words.json';


class Wisielec extends Component {
  constructor(props){
    super(props);
    this.state = {
      word: "",
      disabled: false,
      letter:[],
      UserLetter:"",
      Live:16,
      isWinner:false,
      difficulty:this.props.match.params.id
    }
  }

  componentDidMount(){
    this.loadWords();
  }

  componentWillReceiveProps(){
    window.location.reload()
  }



  //Losuje słowo
  loadWords(){
    const difficulty = this.state.difficulty;
     const random = Math.floor(Math.random() * Words[difficulty].length) + 0  ;
    this.setState({
       word: Words[difficulty][random].toLowerCase().split('')
       })
     this.createEmptyField(Words[difficulty][random]);
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
    if(this.state.letter.indexOf("_") === -1)
    {
      this.setState({
        disabled:true,
        isWinner:true
      })
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
    let losse = this.state.Live === 0 ? true : false;
    return (
      <div className="App">
        <header className="App-header">
        <h3>Difficulty level: {this.props.match.params.id}</h3>
          <h1 style={{margin:'0', height:'30px',fontSize:'20px'}}>{this.state.isWinner ? "WYGRAŁEŚ!" :""} </h1>
          <h1 style={{margin:'0',fontSize:'20px'}}>{this.state.Live===0 ? "Koniec Gry" : "Liczba szans: " +this.state.Live}</h1>
          <h2 className="Answer">{answer}</h2>
          <Keyboard onClickkeys={this.onClick} isDisabled={this.state.disabled} isDisabledButton={this.state.isWinner || losse}/>
         
        </header>
      </div>
    );
  }
}

export default Wisielec;
