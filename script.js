/*global brain */ 

'use strict'; 

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Exploring BrainJS');

// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

net.train(trainingData, {
        log: (error) => console.log(error), 
        logPeriod: 100
      });

console.log("XOR value for [0,0]", net.run([0, 0])); // 0
console.log("XOR value for [0,1]", net.run([0, 1])); // 1
console.log("XOR value for [1,0]", net.run([1, 0])); // 1
console.log("XOR value for [1,1]", net.run([1, 1])); // 0

//console.log([1, 2, 3, 4]); 