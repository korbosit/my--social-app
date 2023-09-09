import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
	{id: 1, message: 'Hi, how are you?', likesCount: 1},
	{id: 2, message: 'Its my first posts', likesCount: 5},
	{id: 3, message: 'im fine', likesCount: 7},
	{id: 4, message: 'and you', likesCount: 23},
	{id: 5, message: 'How old are you', likesCount: 75},
	{id: 6, message: 'You are the best', likesCount: 101},
]

let dialogs = [
	{id: 1, name: 'Vovanec'},
	{id: 2, name: 'Sveta'},
	{id: 3, name: 'Alfa'},
	{id: 4, name: 'Beta'},
	{id: 5, name: 'Mikki'},
	{id: 6, name: 'Timka'},
]

let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'Hello'},
	{id: 3, message: 'Привет'},
	{id: 4, message: 'Здравствуйте'},
	{id: 5, message: 'Добрый день'},
	{id: 6, message: 'Добрый вечер'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
