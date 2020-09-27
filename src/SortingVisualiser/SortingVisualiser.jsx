import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualiser.css';

/* we need to add buttons to generate new arrays and for different 
sorting algos*/


export default class SortingVisualiser extends React.Component{
    constructor(props){
        super(props);

        this.state = {array: [],};        
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 330; i++)
        {
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }
    MergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        console.log(animations);
        for(let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColourChange = i % 3 !== 2;
            if(isColourChange)
            {
                const [barOneidx, barTwoidx] = animations[i];
                const barOneStyle = arrayBars[barOneidx].style;
                const barTwoStyle = arrayBars[barTwoidx].style;
                const colour = i % 3 === 0?'turquoise':'purple';
                setTimeout(() =>{
                    barOneStyle.backgroundColor = colour;
                    barTwoStyle.backgroundColor = colour;
                }, i*2);
                
            }else
            {
                setTimeout(() =>{
                    const [barOneidx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneidx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*2
                );
            }
        }

    }
  

    render(){
        const {array} = this.state;

        return(
          <div className="array-container"> 
            {array.map((value, idx) => (
                <div 
                    className="array-bar" 
                    key ={idx}
                    style ={{backgroundColor:'purple', height: `${value}px`}}></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.MergeSort()}>Merge Sort</button>
            

           </div> 
            );
    }
}




function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}