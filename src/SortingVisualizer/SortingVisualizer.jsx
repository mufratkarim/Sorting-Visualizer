import React from "react";
import './SortingVisualizer.css';
import * as SortingAlgos from '../SortingAlgos/SortingAlgos.js';


// value for the number of bars (value) in the array.
const NUM_ARRAY_BARS = 50;
const MERGE_COLOR = 'darkslategray'
const DEFAULT_COLOR = 'maroon'
const QUICK_COLOR = 'royalblue'
const SECONDARY_COLOR = 'chocolate'
const INSERTION_COLOR = 'midnightblue'
const BUBBLE_COLOR = 'teal'
const SELECTION_COLOR = 'steelblue'
const HEAP_COLOR = 'rebeccapurple';

export default class SortingVisualizer extends React.Component {
    constructor(params) {
        super(params)

        this.state = {
            array: []
        }
    }

    componentDidMount() {
        //console.log("componentDidMount?? is working")
        this.resetArr();
    }

    resetArr() {
        const array = [];

        for (let i = 0; i < NUM_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 700));
        }

        this.setState({ array })

        for (let i = 0; i < this.state.array.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            bars[i].style.backgroundColor = DEFAULT_COLOR;
        }
    }

    mergeSort() {
        // const originalSort = this.state.array.slice().sort((a, b) => a - b)
        const animations = SortingAlgos.mergeSortAnimated(this.state.array)
        var slider = document.getElementById('slider');
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : MERGE_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));

            } else {
                setTimeout(() => {
                    const [barOne, newHeight] = animations[i];
                    bars[barOne].innerHTML = newHeight;
                    const barOneStyle = bars[barOne].style;
                    barOneStyle.height = `${newHeight}px`;

                }, i * (slider.value * -1 + 21));
            }
        }

    }

    quickSort() {
        var slider = document.getElementById('slider');
        const animations = SortingAlgos.quickSortAnimated(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : DEFAULT_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));
            }
            else {
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    const [barOne, barTwo] = animations[i - 1];
                    const barOneStyle = bars[barOne].style;
                    const barTwoStyle = bars[barTwo].style;
                    barOneStyle.height = `${heightTwo}px`;
                    barTwoStyle.height = `${heightOne}px`;
                    barOneStyle.backgroundColor = QUICK_COLOR;
                    barTwoStyle.backgroundColor = QUICK_COLOR;
                    bars[barOne].innerHTML = heightTwo;
                    bars[barTwo].innerHTML = heightOne;
                }, i * (slider.value * -1 + 21));
            }
        }


    }

    insertionSort() {
        const animations = SortingAlgos.insertionSortAnimated(this.state.array)
        var slider = document.getElementById('slider');
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : INSERTION_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));

            }
            else {
                setTimeout(() => {
                    const heightOne = animations[i];
                    const [barOne, barTwo] = animations[i - 1];
                    const barOneStyle = bars[barOne].style;
                    barOneStyle.height = `${heightOne}px`;
                    bars[barOne].innerHTML = heightOne
                }, i * (slider.value * -1 + 21));
            }
        }
    }

    bubbleSort() {
        const animations = SortingAlgos.bubbleSortAnimated(this.state.array)
        var slider = document.getElementById('slider');
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : DEFAULT_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));
            }
            else {
                const [heightOne, heightTwo] = animations[i];
                const [barOne, barTwo] = animations[i - 1];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                setTimeout(() => {
                    if (heightOne !== -1 && heightTwo !== -1) {
                        barOneStyle.height = `${heightTwo}px`;
                        barTwoStyle.height = `${heightOne}px`;
                        bars[barOne].innerHTML = heightTwo;
                        bars[barTwo].innerHTML = heightOne;
                    } else if (i === animations.length - 1) {
                        barOneStyle.backgroundColor = BUBBLE_COLOR;
                    } 
                    barTwoStyle.backgroundColor = BUBBLE_COLOR;
                }, i * (slider.value * -1 + 21));
            }
        }

    }

    selectionSort() {
        const animations = SortingAlgos.selectionSortAnimated(this.state.array)
        var slider = document.getElementById('slider');
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : DEFAULT_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));
            }
            else {
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    const [barOne, barTwo] = animations[i - 1];
                    const barOneStyle = bars[barOne].style;
                    const barTwoStyle = bars[barTwo].style;
                    if (heightOne !== -1 && heightTwo !== -1) {
                        barOneStyle.height = `${heightTwo}px`;
                        barTwoStyle.height = `${heightOne}px`;
                        bars[barOne].innerHTML = heightTwo;
                        bars[barTwo].innerHTML = heightOne;
                        barOneStyle.backgroundColor = SELECTION_COLOR;
                    }
                    
                }, i * (slider.value * -1 + 21));
            }
        }

    }

    heapSort() {
        const animations = SortingAlgos.heapSortAnimated(this.state.array)
        var slider = document.getElementById('slider');
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            const isChangeColor = i % 3 !== 2;
            if (isChangeColor) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : DEFAULT_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * (slider.value * -1 + 21));
            }
            else {
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    const [barOne, barTwo] = animations[i - 1];
                    const barOneStyle = bars[barOne].style;
                    const barTwoStyle = bars[barTwo].style;
                    barOneStyle.height = `${heightTwo}px`;
                    barTwoStyle.height = `${heightOne}px`;
                    bars[barOne].innerHTML = heightTwo;
                    bars[barTwo].innerHTML = heightOne;
                    if (i === animations.length - 1) {
                        barOneStyle.backgroundColor = HEAP_COLOR;
                    }
                    barTwoStyle.backgroundColor = HEAP_COLOR;
                }, i * (slider.value * -1 + 21));
            }
        }

    }

    render() {
        const { array } = this.state
        return (

            <div className="array-container">
                <div>
                    <button className="button-container" onClick={() => this.resetArr()}>Generate Random Array</button>
                    <button className="button-container" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="button-container" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="button-container" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className="button-container" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="button-container" onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button className="button-container" onClick={() => this.heapSort()}>Heap Sort</button>

                    <label className="button-container" id="label" htmlFor="sliderName">Change Speed</label>
                    <input type="range" id="slider" min="1" max="20" defaultValue="10" className="slider" name="sliderName"/>

                </div>
                <br />
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: DEFAULT_COLOR,
                            height: `${value}px`
                        }}>{value}</div>
                ))}
            </div>
        );
    }

}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}