import React from 'react';
import state, { subscribe } from './Redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './Redux/state';


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

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
			</BrowserRouter>
		</React.StrictMode>
	);

	// ...
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);



