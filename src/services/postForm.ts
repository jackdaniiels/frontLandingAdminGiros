import axios from "axios"

export const postForm = async (body: any) => {
    const {name, document, email } = body;
    let response: any;
    let url = 'http://localhost:1337/api/formulario1s';
    let data: any;
    try {
        response = await axios(
            {
                method: 'post',
                url: url,
                data: {
                    data: {
                        nombre: name,
                        documento: document,
                        correo: email
                    }
                },
            }
        );
        data = response?.data?.data[0] || {};
    } catch (error) {
        console.error('error', error);
        data = [];
        throw error;
    }

    console.log('post form response =>', data);
    return data;
}