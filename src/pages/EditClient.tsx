import useListaCadastros from '../hooks/UseListaCadastros';
import { Link, useNavigate } from 'react-router-dom';

const EditClient = () => {
    const { cadastros } = useListaCadastros();
    const navigate = useNavigate();
  
  const handleEdit = (id: number | undefined) => {
      if (id !== undefined) {
        navigate(`/editar-cadastros/id-${id}`)
      }
    };

    return (
      <>
      <div>
        <h1>Editar Cliente</h1>
  
        {cadastros.length === 0 ? (
          <p>Nenhum cadastro salvo.</p>
        ) : (
          <ul className="mt-2">
            {cadastros.map((item, index) => (
              <li key={index} className="mb-2">
                  <div>
                    <strong>ID:</strong> {item.ID}, <strong>Nome:</strong> {item.nome}, <strong>Idade:</strong>{' '}
                    {item.idade}, <strong>UF:</strong> {item.uf}{' '}
                    <button onClick={() => handleEdit(item.ID)}>Editar</button>
                  </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Link to="/cadastro">Cadastrar Cliente</Link>
      </div>
      <div>
        <Link to="/lista-cadastros">Lista de Clientes</Link>
      </div>
    </>
    );
};

  
  export default EditClient;