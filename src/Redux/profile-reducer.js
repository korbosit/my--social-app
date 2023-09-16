const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


// reducer - это чистая функция которая принимает state, action если нужнр применяет этот action к state и возвращает новый state либо же возвращает state, который был до этого не измененным, который пришел в этот reducer, те не изменяет его если action Не подошел

// const profileReducer = (state, action) => {

// 	if (action.type === ADD_POST) {
// 		let newPost = {
// 			id: 5,
// 			message: state.newPostText,
// 			likesCount: 0,
// 		};
// 		state.posts.push(newPost);
// 		state.newPostText = "";
// 	} else if (action.type === UPDATE_NEW_POST_TEXT) {
// 		state.newPostText = action.newText;
// 	} 

// 	return state;
// }

let initialState = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likesCount: 1 },
		{ id: 2, message: "Its my first posts", likesCount: 5 },
		{ id: 3, message: "im fine", likesCount: 7 },
		{ id: 4, message: "and you", likesCount: 23 },
		{ id: 5, message: "How old are you", likesCount: 75 },
		{ id: 6, message: "You are the best", likesCount: 101 },
	],
	newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default: 
			return state;
	}
}

// action creator
export const addPostActionCreator = () => ({type: ADD_POST})	
export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT,
		newText : text
})

export default profileReducer;