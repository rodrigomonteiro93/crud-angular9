npm init -y
Criar package.json
"scripts": {
    "start": "json-server --watch db.json --port 3001"
  },

npm i json-server
criar dependencias

arquivo db.json
{
  "products": [{
    "id": 1,
    "name": "Caneta azul",
    "price": 8.40
  },{
    "id": 2,
    "name": "Caneta vermelha",
    "price": 3.30
  },{
    "id": 3,
    "name": "Caneta preta",
    "price": 5.80
  },{
    "id": 4,
    "name": "Caneta verde",
    "price": 1.20
  }]
}

npm start