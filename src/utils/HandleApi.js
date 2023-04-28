import axios from "axios";

const baseUrl = "http://localhost:8080/api/products";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/addProduct`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  const updatedData = await axios({
    method: "PUT",
    url: `${baseUrl}/${toDoId}`,
    data: { text },
  });
  const updateResult = updatedData.data;
  console.log("this one" + updateResult);
  setIsUpdating(true);
  setToDo(updateResult);
  setText("");
};

const deleteToDo = (id, setToDo) => {
  axios
    .delete(`${baseUrl}/${id}`, { id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
