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
    trainHardwareSoftware(){
        const data = require('./../../../../resources/base/media/data.json');
        const network = new recurrent.LSTM();

        const trainingData = data.map(item => ({
            input: item.text,
            output: item.category
        }));
        console.log("TrainData collected")
        network.train(trainingData, {
            iterations: 50
        });

        console.log("Train Complete");
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
    },
    loadHardwareSoftware(){
        const data = require('./../../../../resources/base/media/hardwaresoftware_model.json');
        const net = new recurrent.LSTM();
        net.fromJSON(data);
        this.Output = "The problem type is: "+net.run('my unit test was wrong');
        console.log(`Category: ${this.Output}`);
        console.log("Run Complete");

    }
}
