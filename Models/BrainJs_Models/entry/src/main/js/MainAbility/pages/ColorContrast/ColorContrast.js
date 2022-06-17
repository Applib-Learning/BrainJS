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
    trainColor(){
        var net = new NeuralNetwork();

        net.train([{
                       input: {
                           r: 0.03,
                           g: 0.7,
                           b: 0.5
                       },
                       output: {
                           black: 1
                       }
                   },
                   {
                       input: {
                           r: 0.16,
                           g: 0.09,
                           b: 0.2
                       },
                       output: {
                           white: 1
                       }
                   },
                   {
                       input: {
                           r: 0.5,
                           g: 0.5,
                           b: 1.0
                       },
                       output: {
                           white: 1
                       }
                   }
        ]);
        const networkState = net.toJSON();
        console.log(JSON.stringify(networkState));
    },
    loadColor(){
        const data = require('./../../../../resources/base/media/color_model.json');
        //        const networkState = JSON.parse(data);
        const net = new NeuralNetwork();
        net.fromJSON(data);
        var output1 = net.run({
            r: 0.9,
            g: 0.4,
            b: 0
        }); // { white: 0.99, black: 0.002 }
        this.Output = "White: " + output1['white'] + "\nBlack: " + output1['black'];
        console.log("The output is " + output1['white'] + " " + output1['black'])
    },
}
