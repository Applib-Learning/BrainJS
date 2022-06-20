import {NeuralNetwork,recurrent} from 'brain.js';
import router from '@system.router';
export default {
    data: {
        title: "",
        Output: "Click Load to predict"
    },
    onInit() {
        this.title = "Hello World";
    },
    back(){
        router.back();
    },
    trainXor(){
        const config = {
            //            iterations: 1000,
            binaryThresh: 0.5,
            hiddenLayers: [3],
            activation: 'sigmoid'
        };
        // create a simple feed forward neural network with backpropagation
        const net = new NeuralNetwork(config);
        console.log("NeuralNetwork(config)");
        net.train([{
                       input: [0, 0],
                       output: [0]
                   },
                   {
                       input: [0, 1],
                       output: [1]
                   },
                   {
                       input: [1, 0],
                       output: [1]
                   },
                   {
                       input: [1, 1],
                       output: [0]
                   }
        ]);
        console.log("Trained");
        const networkState = net.toJSON();
        console.log(JSON.stringify(networkState));

    },
    loadXor(){
        const data = require('./../../../../resources/base/media/xor_model.json');
        //        const networkState = JSON.parse(data);
        const network = new NeuralNetwork();
        network.fromJSON(data);
        this.Output = "XOR of [1, 1] is: " + network.run([1, 1]) // [0.987]
        console.log(this.Output);
    }
}
