import axios from "axios"

export const postForm = async (body: any) => {
    let response: any;
    let url = 'http://localhost:1337/api/landing-3s?populate=*';
    let data: any;
    try {
        response = await axios(
            {
                method: 'post',
                url: url,
                data: body,
            }
        );
        data = response?.data?.data[0] || {};
    } catch (error) {
        console.error('error', error);
        data = [];
    }

    console.log('post form response =>', data);
    return data;
}