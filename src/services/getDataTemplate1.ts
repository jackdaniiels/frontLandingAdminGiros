import axios from 'axios';

export const getDataTemplate1 = async () => {
    let response: any;
    let data: any;
    try {
        response = await axios.get(
            'http://localhost:1337/api/landing-2s?populate=*',
        );
        data = response?.data?.data[0] || {};
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    console.log('data', data);
    return data;
}