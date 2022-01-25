import axios from "axios"

export const postForm = async (body: any, id?: number) => {

    let response: any;
    let url = `http://localhost:1337/api/formulario${id}s`;
    let data: any;
    try {
        response = await axios(
            {
                method: 'post',
                url: url,
                data: {
                    data: {
                        nombre: body.name,
                        documento: body.document,
                        correo: body.email,
                        telefono: body.phone ? body.phone : '',
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