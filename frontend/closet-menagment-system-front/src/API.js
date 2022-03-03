import {
    API_URL
} from './config';

const API = {
    login: async (login, password) => {
        const endpoint = `${API_URL}rest-auth/login/`;
        try{
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": login,
                    "password": password
                })
            });
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
    generateClothes: async () => {
        console.log("GENERATED CLOTHES")
        const endpoint = `${API_URL}clothes/list/`;
        try{
            const res = await fetch(endpoint, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin':'http://localhost:3000/',
                    'Content-Type': 'application/json',
                  },
                credentials: 'include'
            });
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