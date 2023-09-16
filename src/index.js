import React from 'react';
import store  from './Redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


// перерисовать все дерево
// export let rerenderEntireTree = (state) => {
// 	const root = ReactDOM.createRoot(document.getElementById('root'));
// 	root.render(
// 		<React.StrictMode>
// 			<BrowserRouter>
// 				{/* <App posts={posts} dialogs={dialogs} messages={messages}/> */}
// 				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
// 			</BrowserRouter>
// 		</React.StrictMode>
// 	);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 	reportWebVitals();
// }

let root = ReactDOM.createRoot(document.getElementById('root'));

// функция, которую мы запускаем, чтобы отрисовать всен наше дерево
let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			{/* все что внутри BrowserRouter могло переключаться, урловые переключения */}
			<BrowserRouter>
				<App state={state}
						dispatch={store.dispatch.bind(store)}
						store = {store}
						/>
			</BrowserRouter>
		</React.StrictMode>
	);

	// ...
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});



