'use strict'

const getText = () => {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log("erro", err))
}

const getUsers = () => {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Usuários</h2><p>From: /users.json</p>';
      data.forEach((user) => {
        output += `
              <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
              </ul>
            `
        document.getElementById('output').innerHTML = output;
      })
    })
}

const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">API Data</h2><p>From: <a href="https://jsonplaceholder.typicode.com/posts" target="_newblank">jsonplaceholder.typicode</a></p>'
      console.log(data);
      data.forEach((api) => {
        output += `
            <div class="card card-body mb-3">
              <h3>${api.title}</h3>
              <p>${api.body}</p>
            </div>
            `

        document.getElementById('output').innerHTML = output;
      })
    })
}

const addPost = (e) => {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: title, body: body })
  })
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Post feito!</h2>'
      console.log(data);
      output += `
            <div>
              <p>title: ${data.title}</p>
              <p>body: ${data.body}</p>
            </div>
            `
      document.getElementById('output').innerHTML = output;
    })
}



document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);




