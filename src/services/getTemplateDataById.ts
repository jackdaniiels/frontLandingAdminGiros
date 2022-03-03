import axios from 'axios';

export const getTemplateDtaById = async (landing: number,id:string) => {
    let response: any;
    let data: any;
    try {
        response = await axios.get(
            `http://localhost:1337/api/landing-${landing}s/${id}?populate=*`,
        );
        data = response?.data?.data || {};
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    console.log('data1', data);
    return data;
}