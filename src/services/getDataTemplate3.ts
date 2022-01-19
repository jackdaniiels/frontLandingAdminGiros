import axios from 'axios';

export const getDataTemplate3 = async () => {
    let response: any;
    let data: any;
    try {
        response = await axios.get(
            'http://localhost:1337/api/landing-3s?populate=*',
        );
        data = response?.data?.data[0] || {};
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    console.log('data3', data);
    return data;
}