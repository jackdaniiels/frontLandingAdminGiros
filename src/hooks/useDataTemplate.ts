import { useEffect, useState } from 'react';
import { getDataTemplate2 } from '../services/getDataTemplate2';
import { getDataTemplate1 } from '../services/getDataTemplate1';
import { getDataTemplate3 } from '../services/getDataTemplate3';

interface dataModel {
    id: number;
    attribrutes: any;
}

export const useDataTemplate = () => {
    const [dataTemplate1, setDataTemplate1] = useState<dataModel>({
        id: 0,
        attribrutes: {},
    });
    const [dataTemplate2, setDataTemplate2] = useState<dataModel>({
        id: 0,
        attribrutes: {},
    });
    const [dataTemplate3, setDataTemplate3] = useState<dataModel>({
        id: 0,
        attribrutes: {},
    });

    useEffect(() => {
        template1();
        template2();
        template3();
    }, []);

    const template1 = () => {
        getDataTemplate2().then((data) => {
            const { attributes } = data;
            console.log('dataTemplate1', data);
            setDataTemplate1(attributes);
        });
    };

    const template2 = () => {
        getDataTemplate1().then((data) => {
            const { attributes } = data;
            console.log('dataTemplate2', data);

            setDataTemplate2(attributes);
        });
    };

    const template3 = () => {
        getDataTemplate3().then((data) => {
            const { attributes } = data;
            console.log('dataTemplate3', data);

            setDataTemplate3(attributes);
        });
    };

    const value = {
        template2: dataTemplate1,
        template1: dataTemplate2,
        template3: dataTemplate3,
    };

    return value;
}
