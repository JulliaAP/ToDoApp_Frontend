import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import Topo from "./components/Header";
import Rodape from "./components/Footer";
import './components/ToDo.css';
import LoginForm from './LoginForm';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Adiciona o estado para controlar se o usuário está logado
  const [toDo, setToDo] = useState([]); // atualizar a lista de tarefas 
  const [text, setText] = useState(""); //limpar a caixa de texto
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");



  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
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
            <div
              className={isUpdating ? "button update" : "button add"}
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)
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
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
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