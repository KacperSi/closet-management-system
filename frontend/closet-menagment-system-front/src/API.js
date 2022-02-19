import {
    API_URL
} from './config';

const API = {
    generateClothes: () => {
        console.log("GENERATED CLOTHES")
    },
    addClothes: async (name, image, type, weather) => {
        console.log(name, image, type, weather)
        return('OK')
    }
}

export default API