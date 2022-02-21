import {
    API_URL
} from './config';

const API = {
    generateClothes: async () => {
        console.log("GENERATED CLOTHES")
        const endpoint = `${API_URL}clothes_set/`;
        try{
            const res = await fetch(endpoint);
            if (!res.ok){
                console.log('Problem' + res.status)
                throw new Error(res.status);
            }else{
                const data = await res.json();
                console.log(data)
                return data;
        }
        }
        catch (error){
            console.log(error);
        }
    },
    addClothes: async (name, image, type, weather) => {
        console.log(name, image, type, weather)
        return('OK')
    }
}

export default API