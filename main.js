/* 
POST - добавление данных
PUT - полная замена данных
PATCH - частичная замена данных
DELETE - удаление
GET - получение данных
*/

/*
Команда для старта json-server
json-server -w db.json -p 8000
*/

/*
CURD - Create(POST) Read(GET) Update(PUT/PATCH) Delete(DELETE)
*/


//! Create
const API = "http://localhost:8000/todo";

const inpAdd = document.getElementById("inp-add");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", async function (){
   const newToDo = {
      todo: inpAdd.value,
   };
   if(newToDo.todo.trim() === ""){
      alert('Заполните поля!');
      return;
   }
   await fetch(API, {
      method: "POST",
      body: JSON.stringify(newToDo),
      headers: {
         "Content-type": "application/json; charset=utf-8",
      },
   });
   getTodos();
});

//! Read
const list = document.getElementById('list');
async function getTodos(params) {
   const response = await fetch(API)
   .then((res) => res.json())
   .catch(err => console.log(err));
   list.innerHTML = "";
   console.log(response);
   response.forEach((item) => {
      const newElem = document.createElement('div');
      newElem.innerHTML = `<span>${item.todo}</span>`;
      list.append(newElem);
   });
}
getTodos();