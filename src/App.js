import React, { useState } from 'react';

function App() {
  // Estado para armazenar as tarefas e o texto da nova tarefa
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa
  function adicionarTarefa(evento) {
    evento.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    if (novaTarefa.trim() !== '') {
      // Se o texto não estiver vazio, adiciona a nova tarefa à lista
      const tarefa = { texto: novaTarefa, concluida: false };
      setTarefas([...tarefas, tarefa]);
      setNovaTarefa(''); // Limpa o campo de entrada
    }
  }

  // Função para marcar ou desmarcar uma tarefa como concluída
  function alternarTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  }

  // Função para remover uma tarefa
  function removerTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  }

  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa} style={estilos.formulario}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          style={estilos.input}
        />
        <button type="submit" style={estilos.botao}>Adicionar</button>
      </form>
      <ul style={estilos.lista}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={estilos.itemLista}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarTarefa(index)}
            />
            <span
              style={{
                ...estilos.textoTarefa,
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
              }}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => removerTarefa(index)} style={estilos.botaoRemover}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Estilos básicos para a aplicação
const estilos = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    maxWidth: '400px',
    margin: '50px auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  titulo: {
    textAlign: 'center',
  },
  formulario: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  botao: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
  },
  lista: {
    listStyleType: 'none',
    padding: 0,
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoTarefa: {
    flex: 1,
    marginLeft: '10px',
  },
  botaoRemover: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;