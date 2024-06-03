import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import Topo from "./components/Header";
import Rodape from "./components/Footer";
import './components/ToDo.css';
import LoginForm from './LoginForm';
import { updateTaskCompletion } from "./utils/HandleApi"; 


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Adiciona o estado para controlar se o usuário está logado
  const [toDo, setToDo] = useState([]); // atualizar a lista de tarefas 
  const [text, setText] = useState(""); //limpar a caixa de texto
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [prazo, setPrazo] = useState("");
  const [prazoHora, setPrazoHora] = useState("");



  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, prazo) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
    setPrazo(prazo);
  };

  const handleCompletion = (taskId) => {
    updateTaskCompletion(taskId);
  };

  if (loggedIn) {
    return (
      <div className="App"> 
        <Topo/>
        <div className="container">
          <h1 className="Titulo">Task-a-Tudo</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Adicione uma tarefa..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="date"
              value={prazo}
              onChange={(e) => setPrazo(e.target.value)}
            />
            <input
              type="time"
              value={prazoHora}
              onChange={(e) => setPrazoHora(e.target.value)}
            />
            <div
              className="add"
              onClick={
                isUpdating
                ? () => updateToDo(toDoId, text, prazo, prazoHora, setToDo, setText, setPrazo, setPrazoHora, setIsUpdating)
                : () => addToDo(text, prazo, prazoHora, setText, setPrazo, setPrazoHora, setToDo)
              }
            >
              {isUpdating ? "Atualizar" : "Adicionar"}
            </div>
          </div>

          <div className="list">
            {toDo.map((item) => (
              <ToDo
                key={item.id}
                text={item.text}
                data={item.data}
                prazo={item.prazo}
                isCompleted={item.isCompleted}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
                handleCompletion={() => handleCompletion(item._id)}
              />
            ))}
          </div>
        </div>
        <Rodape/>
      </div>
    );
  } else {
    return <LoginForm onLogin={() => setLoggedIn(true)} />; // Mostra o formulário de login se o usuário não estiver logado
  }
}

export default App;