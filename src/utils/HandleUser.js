import axios from "axios";

const baseUrl = "http://localhost:8080/api/users";

const createUser = (setToDo) => {
  axios.post(`${baseUrl}/signup`).then(({ data }) => {
    console.log("data ---> ", data);
    setToDo(data);
  });
};

const login = (email, setemail, setToDo) => {
  axios
    .post(`${baseUrl}/login`, { email })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
