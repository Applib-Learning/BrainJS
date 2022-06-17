import {NeuralNetwork,recurrent} from 'brain.js';
import router from '@system.router';
export default {
    data: {
        title: "",
        Output: "Click Load to predict"
    },
    onInit() {
        this.title = "Hello World";
    },back(){
        router.back();
    },
    trainstringClassification(){
        const config = {
            iterations: 100,
            log: true,
            logPeriod: 50,
            layers: [10],
        };

        //data which is been used for training
        const data = [
            { input: 'Argon', output: 'a' },
            { input: 'Argentina', output: 'a' },
            { input: 'Aron', output: 'a' },
            { input: 'August', output: 'a' },
            { input: 'Australia', output: 'a' },
            { input: 'America', output: 'a' },
            { input: 'Allison', output: 'a' },
            { input: 'Alex', output: 'a' },
            { input: 'Arthur', output: 'a' },
            { input: 'Also', output: 'a' },

            { input: 'Barcelona', output: 'b' },
            { input: 'Baseball', output: 'b' },
            { input: 'Bayern', output: 'b' },
            { input: 'Batch', output: 'b' },
            { input: 'Brasillia', output: 'b' },
            { input: 'Brass', output: 'b' },
            { input: 'Bateman', output: 'b' },
            { input: 'Bose', output: 'b' },
            { input: 'Biscuit', output: 'b' },
            { input: 'Bhutan', output: 'b' },

            { input: 'China', output: 'c' },
            { input: 'Chile', output: 'c' },
            { input: 'Cheat', output: 'c' },
            { input: 'Caught', output: 'c' },
            { input: 'Colombia', output: 'c' },
            { input: 'Colorado', output: 'c' },
            { input: 'Cult', output: 'c' },
            { input: 'Cristiano', output: 'c' },
            { input: 'Choke', output: 'c' },
            { input: 'Cut', output: 'c' },
        ];

        // the thing we would test


        const network = new recurrent.LSTM();
        network.train(data, config);
        const networkState = network.toJSON();
        var s = JSON.stringify(networkState);
        let i = 0;
        while(i<s.length){
            if((i+3000)<s.length){
                console.log(s.substring(i,i+3000));
                i += 3000;
            }
            else{
                console.log(s.substring(i,s.length));
                i += 3000;
            }
        }
        console.log(JSON.stringify(networkState));
        //        const output = network.run(test);
        //        console.log(`It starts with: ${output}`); // It starts with: c
    },
    loadStringClassification(){
        const data = require('./../../../../resources/base/media/stringclassification_model.json');
        const net = new recurrent.LSTM();
        net.fromJSON(data);
        const test = 'Broke';
        this.Output = net.run(test);
        console.log(`It starts with: ${this.Output}`); // It starts with: b
    }
}
