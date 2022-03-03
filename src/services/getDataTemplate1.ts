import axios from 'axios';

export const getDataTemplate1 = async () => {
    let response: any;
    let data: any;
    try {
        response = await axios.get(
            'http://localhost:1337/api/landing-1s?populate=*',
        );
        data = response?.data?.data || [];
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    console.log('data1', data);
    return data;
}