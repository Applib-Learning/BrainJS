import {GPU} from 'gpu.js';
import {NeuralNetwork,recurrent} from 'brain.js';
import router from '@system.router';
import fileio from '@ohos.fileio';
export default {
    data: {
        title: "",
        output: -1,
        Output: -2.1
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    generateMatrices () {
        console.log("Start Time");
        const matrices = [[], []]
        for (let y = 0; y < 50; y++) {
            matrices[0].push([])
            matrices[1].push([])
            for (let x = 0; x < 50; x++) {

                matrices[0][y].push((15*Math.random())%5)
                matrices[1][y].push((15*Math.random())%5)
            }
        }

        return matrices;
    },
    useGpu(){
        const gpu = new GPU();
        const multiplyMatrix = gpu.createKernel(function(a, b) {
            let sum = 0;
            for (let i = 0; i < 50; i++) {
                sum += a[this.thread.y][i] * b[i][this.thread.x];
            }
            return sum;
        }).setOutput([50, 50])
        const matrices = this.generateMatrices()
        const out = multiplyMatrix(matrices[0], matrices[1])
        console.log(out[3][3])
        this.output = out[3][3];
    },
    launchXor() {
        router.push ({
            uri: 'pages/Xor/Xor',
        });
    },
    launchColorContrast() {
        router.push ({
            uri: 'pages/ColorContrast/ColorContrast',
        });
    },
    launchHardwareSoftware() {
        router.push ({
            uri: 'pages/HardwareSoftware/HardwareSoftware',
        });
    },
    launchNextNumber() {
        router.push ({
            uri: 'pages/NextNumber/NextNumber',
        });
    },
    launchFirstLetter() {
        router.push ({
            uri: 'pages/FirstLetter/FirstLetter',
        });
    },

}



