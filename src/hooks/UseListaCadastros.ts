import { useEffect, useState } from 'react';
import { FormFields } from '../models/Cadastros';

const lista = "cadastros";

const useListaCadastros = () => {
    const [cadastros, setCadastros] = useState<FormFields[]>([]);

    useEffect(() => {
        const data = localStorage.getItem(lista);
        if (data) {
            setCadastros(JSON.parse(data));
        }
    }, []);

    const incluirCadastro = (data: FormFields) => {
        const novoID = cadastros.length > 0 ? Math.max(...cadastros.map (cadastro => cadastro.ID || 0)) + 1 : 1;
        const novosCadastros = [...cadastros, {...data, ID: novoID}];
        setCadastros(novosCadastros);
        localStorage.setItem(lista, JSON.stringify(novosCadastros));
    }

    const atualizarCadastro = (index: number, novoCadastro: FormFields) => {
        const novosCadastros = [...cadastros];
        novosCadastros[index] = {...novoCadastro, ID: novosCadastros[index].ID};
        setCadastros(novosCadastros);
        localStorage.setItem(lista, JSON.stringify(novosCadastros));
    };

    return { cadastros, incluirCadastro, atualizarCadastro };
}

export default useListaCadastros;
