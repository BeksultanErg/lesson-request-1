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

const API = "http://localhost:8000/todo";

const inpAdd = document.getElementById("inp-add");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function (){
   const newToDo = {
      todo: inpAdd.value,
   };
   fetch(API, {
      method: "POST",
      body: JSON.stringify(newToDo),
      headers: {
         "Content-type": "application/json; charset=utf-8",
      },
   });
});