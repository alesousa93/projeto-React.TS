import { useParams, useNavigate, Link } from 'react-router-dom';
import useListaCadastros from '../hooks/UseListaCadastros';
import { useState, useEffect } from 'react';

const EditClientID = () => {
    const { id } = useParams();
    const { cadastros, atualizarCadastro } = useListaCadastros();
    const navigate = useNavigate();

    const cadastroIndex = cadastros.findIndex(c => String(c.ID) === String(id?.replace('id-', '')));
    const cadastro = cadastros[cadastroIndex];

    const [form, setForm] = useState({ nome: '', idade: '', uf: '' });

    useEffect(() => {
        if (cadastro) {
            setForm({
                nome: cadastro.nome,
                idade: String(cadastro.idade),
                uf: cadastro.uf
            });
        }
    }, [cadastro]);

    if (!cadastro) {
        return <div>Cadastro não encontrado.</div>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        atualizarCadastro(cadastroIndex, { ...cadastro, ...form, idade: Number(form.idade) });
        navigate('/editar-cadastros');
    };

    return (
        <div>
            <h2>Editando cadastro ID: {cadastro.ID}</h2>
            <div>
                <label>
                    Nome:
                    <input name="nome" value={form.nome} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Idade:
                    <input name="idade" value={form.idade} onChange={handleChange} type="number" />
                </label>
            </div>
            <div>
                <label>
                    UF:
                    <input name="uf" value={form.uf} onChange={handleChange} />
                </label>
            </div>
            <button onClick={handleSave}>Salvar</button>
            <div>
                <Link to="/editar-cadastros">Voltar</Link>
            </div>
        </div>
    );
};

export default EditClientID;