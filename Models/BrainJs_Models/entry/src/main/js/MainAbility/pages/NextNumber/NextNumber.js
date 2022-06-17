import {NeuralNetwork,recurrent} from 'brain.js';
import router from '@system.router';
export default {
    data: {
        title: "",
        Output:"Click Load to predict"
    },
    onInit() {
        this.title = "Hello World";
    },
    back(){
        router.back();
    },
    trainpredictnext(){

        const net = new recurrent.LSTMTimeStep({
            inputSize: 2,
            hiddenLayers: [10],
            outputSize: 2,
        });

        // Same test as previous, but combined on a single set
        const trainingData = [
            [
                [1, 5],
                [2, 4],
                [3, 3],
                [4, 2],
                [5, 1],
            ],
        ];

        net.train(trainingData, { log: true, errorThresh: 0.09 });
        const networkState = net.toJSON();
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
    loadpredictnext(){
        const data = require('./../../../../resources/base/media/predictnext_model.json');
        const net = new recurrent.LSTMTimeStep();
        net.fromJSON(data);

        const closeToFiveAndOne = net.run([
            [3, 3]
        ]);

        console.log(closeToFiveAndOne);

        const forecast = net.forecast(
            [
                [1, 5],
                [2, 4],
            ],
            3
        );
        this.Output = "The next 3 predictions are: "+ forecast;
//        console.log('next 3 predictions', forecast);
//        console.log(forecast);
        console.log("Done")
    }
}
