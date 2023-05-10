import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '99f80d3920msha98ec1a1143d667p182cb2jsn86bfb642938d',
          },
    });
    return data;
}