// Faz conexão com o backend 
import axios from "axios";

// Url de onde está hospedado o backend 
//const baseURL = "http://localhost:5000";
const baseURL = "https://todoapp-backend-q7xx.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(`${baseURL}`).then(({ data }) => {
    console.log("data --->", data);
    setToDo(data);
  });
};

const addToDo = (text, prazo, prazoHora, setText, setPrazo, setPrazoHora, setToDo) => {
  const prazoCompleto = `${prazo}T${prazoHora}`;
  axios
    .post(`${baseURL}/save`, { text, prazo: prazoCompleto })
    .then((data) => {
      console.log(data);
      setText("");
      setPrazo("");
      setPrazoHora("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, prazo, prazoHora, setToDo, setText, setPrazo, setPrazoHora, setIsUpdating) => {
  const prazoCompleto = `${prazo}T${prazoHora}`;
  axios
    .post(`${baseURL}/update`, { _id: toDoId, text, prazo: prazoCompleto })
    .then((data) => {
      console.log(data);
      setText("");
      setPrazo("");
      setPrazoHora("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};


  const deleteToDo = (_id, setToDo) => {
    axios
      .post(`${baseURL}/delete`, { _id })
      .then((data) => {
        console.log(data);
        getAllToDo(setToDo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  export { getAllToDo, addToDo, updateToDo, deleteToDo };

