

// Obter todos os usuários //
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(console.log);



// Faça login com seu usuário e ganhe tokens //
fetch('https://dummyjson.com/user/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, 
  }),
})
.then(res => res.json())
.then(console.log);


// Autenticar seu usuário //
fetch('https://dummyjson.com/user/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
  },
  credentials: 'include' 
})
.then(res => res.json())
.then(console.log);


// Obter um usuário único //
fetch('https://dummyjson.com/users/1')
.then(res => res.json())
.then(console.log);


// Pesquisar usuários //
fetch('https://dummyjson.com/users/search?q=John')
.then(res => res.json())
.then(console.log);


// Filtrar usuários // 
fetch('https://dummyjson.com/users/filter?key=hair.color&value=Brown')
.then(res => res.json())
.then(console.log);


// Pular e limitar os usuários //
fetch('https://dummyjson.com/users?limit=5&skip=10&select=firstName,age')
.then(res => res.json())
.then(console.log);


// Achar perfis de usuários pelo ID //
/* getting carts of user with id 6 */
fetch('https://dummyjson.com/users/6/carts')
.then(res => res.json())
.then(console.log);


// Identificar as atividades do usuário pelo ID //
/* getting todos of user with id 5 */
fetch('https://dummyjson.com/users/5/todos')
.then(res => res.json())
.then(console.log);


// Adicionar um novo usuário //
fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Muhammad',
    lastName: 'Ovi',
    age: 250,
    /* other user data */
  })
})
.then(res => res.json())
.then(console.log);


// Atualizar um usuário //
/* updating lastName of user with id 2 */
fetch('https://dummyjson.com/users/2', {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    lastName: 'Owais'
  })
})
.then(res => res.json())
.then(console.log);


// Excluir um usuário //
fetch('https://dummyjson.com/users/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);


