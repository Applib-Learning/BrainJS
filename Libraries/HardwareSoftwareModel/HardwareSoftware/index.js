import {NeuralNetwork,recurrent} from './brainjs.js';
export function predicths(test){
    const data = require('./src/main/resources/base/media/hardwaresoftware_model.json');
    //        const networkState = JSON.parse(data);
    const net = new recurrent.LSTM();
    net.fromJSON(data);
    const output = net.run(test);
    console.log(`Category: ${output}`);
    return output;
}