import {predicths} from '@ohos/hardwaresoftware';
export default {
    data: {
        title: "Press Predict"
    },
    onInit() {

    },
    hspredict(){
        const test = 'code';
        this.title = "The category of problem is: " + predicths(test);
    }
}



