import axios from 'axios';
import { urlApi } from '../env/env';

export const getDataTemplate2 = async () => {
    let url = urlApi;
    let response: any;
    let data: any;
    try {
        response = await axios.get(
            `${url}/landing-2s?populate=*`,
        );
        data = response?.data.data || [];
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    // console.log('data2', data);
    return data;
}