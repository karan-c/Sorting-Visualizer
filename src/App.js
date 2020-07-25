import React, { useState, useEffect } from 'react';
import './App.css';
import BubbleSortSequence from "./sortingAlgos/bubblesort";
import InsertionSortSequence from "./sortingAlgos/insertionSort"
import QuickSortSequence from './sortingAlgos/quickSort';
import MergeSortSequence from './sortingAlgos/mergeSort';

function randomNumber(min, max) {  
  return Math.floor(Math.random() * (max - min) + min); 
}

const SequenceSpeed = 3
const color1 = "darkcyan"
const color2 = "red"
function disableAll() {
  
    const buttons = document.getElementsByClassName("button")
    for( let i =0 ; i < buttons.length; i++) {
    buttons[i].disabled=true;
}
}

function enableAll() {
  const buttons = document.getElementsByClassName("button")
  console.log(buttons)
  for( let i =0 ; i < buttons.length; i++) {
    buttons[i].disabled=false;;
  }
}
function App() {
  
  const [array, setArray] = useState([])

    const changeArray = (event) => {
    //event.preventDefault()
    const arr =  []
    for (let i = 0; i <180; i++){
      arr.push(randomNumber(5,610))
    }
    const ArrayBar = document.getElementsByClassName("bar")
    if(ArrayBar.length > 0){
      for(let i=0; i< ArrayBar.length ; i++) {
        const barStyle = ArrayBar[i].style
        barStyle.backgroundColor = color1
        barStyle.height = `${arr[i]}px`
      }
    }
    setArray(arr)
    }
    useEffect ( () => {
      const arr =  []
      for (let i = 0; i <180; i++){
        arr.push(randomNumber(5,600))
        setArray(arr)
      }
    }, [] )
  
    const insertionMergeSort  = async (e) => {
      
      disableAll()
      const ani = {sequenceArr : []}
      if (e.target.name === "mergesort"){
        ani.sequenceArr = MergeSortSequence(array)
      }
      else{
        ani.sequenceArr = InsertionSortSequence(array)
      }
      const sequence = ani.sequenceArr
      setTimeout(() => {
        enableAll()
      }, sequence.length * SequenceSpeed)
      const ArrayBar = document.getElementsByClassName("bar")
      for( let i=0; i < sequence.length ; i++)
      {
        
        console.log(sequence[i])
        if(sequence[i][2] === "comp"){
          const id1 = sequence[i][0]
          const id2 = sequence[i][1]
          const id1style = ArrayBar[id1].style
          const id2style = ArrayBar[id2].style
          setTimeout( () => {
            id1style.backgroundColor = (id1style.backgroundColor === color1) ? color2 : color1
            id2style.backgroundColor = (id2style.backgroundColor === color1) ? color2 : color1
          }, i*SequenceSpeed)
        }
        else{
          const id = sequence[i][0]
          const newHeight = sequence[i][1]

            setTimeout( () => {
              const idStyle = ArrayBar[id].style
              array[id] = newHeight
              idStyle.height = `${newHeight}px`
              
            }, i*SequenceSpeed)
        }
      }
      //enableAll()
    }
    const quickAndBubbleSort = async (e) => {

      disableAll()
      const ani = {sequenceArr : []}
      if (e.target.name === "quicksort"){
        ani.sequenceArr = QuickSortSequence(array)
      }
      else{
        ani.sequenceArr = BubbleSortSequence(array)
      }
      const sequence = ani.sequenceArr
      setTimeout(() => {
        enableAll()
      }, sequence.length * SequenceSpeed)
      const ArrayBar = document.getElementsByClassName("bar")

        for( let i=0; i < sequence.length ; i++)
        {
          const id1 = sequence[i][0]
          const id2 = sequence[i][1]
          const id1style = ArrayBar[id1].style
          const id2style = ArrayBar[id2].style

          if(sequence[i][2] === "comp"){
            setTimeout( () => {
              id1style.backgroundColor = (id1style.backgroundColor === color1 ) ? color2 : color1
              id2style.backgroundColor = (id2style.backgroundColor === color1 ) ? color2 : color1
            }, i*SequenceSpeed)
          }
          else{
              setTimeout( () => {
                const id1style = ArrayBar[id1].style
                const id2style = ArrayBar[id2].style
                let temp = array[id1]
                array[id1] = array[id2]
                array[id2] = temp
                id1style.height = `${array[id1]}px`
                id2style.height = `${array[id2]}px`
              }, i*SequenceSpeed)
          }
        }
    }
    
  return (
    <div>
    <div className="header"><b>
      <button className="button" onClick={changeArray}>Change Array </button>
      <button className="button" onClick={quickAndBubbleSort} name = "quicksort">Quick Sort</button>
      <button className="button" onClick={insertionMergeSort} name = "mergesort">Merge Sort</button>
      <button className="button" onClick={insertionMergeSort} name = "insertionsort">Insertion Sort</button>
      <button className="button" onClick={quickAndBubbleSort} name = "bubblesort">Bubble Sort</button>
      </b>
    </div>
    <div className="playArea">
      
    {
    array.map( (h, idx) => (<div className="bar" key = {idx} style={{height: h, backgroundColor: color1}}></div>)) 
    }
    </div>
    </div>
  );
}

export default App;
