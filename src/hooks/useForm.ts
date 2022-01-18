import { useState } from 'react';
export const useForm = (initialState: any) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(values);
    };

    return {
        handleInputChange,
        handleSubmit,
        values,
    };
}