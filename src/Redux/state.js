let store = {
	_state : {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 1},
				{id: 2, message: 'Its my first posts', likesCount: 5},
				{id: 3, message: 'im fine', likesCount: 7},
				{id: 4, message: 'and you', likesCount: 23},
				{id: 5, message: 'How old are you', likesCount: 75},
				{id: 6, message: 'You are the best', likesCount: 101},
			],
			newPostText: 'it-kamasutra.com'
		},
		dialogsPages: {
			dialogs: [
				{id: 1, name: 'Vovanec'},
				{id: 2, name: 'Sveta'},
				{id: 3, name: 'Alfa'},
				{id: 4, name: 'Beta'},
				{id: 5, name: 'Mikki'},
				{id: 6, name: 'Timka'},
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'Hello'},
				{id: 3, message: 'Привет'},
				{id: 4, message: 'Здравствуйте'},
				{id: 5, message: 'Добрый день'},
				{id: 6, message: 'Добрый вечер'},
			]
		},
	},
	//метод для обращения к state, так ка он приваный
	getState () {
		return this._state;
	},
	_callSubscriber () {
		console.log('State changed');
	},
	addPost () {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
	
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer; // наблюдатель - паттерн , похож на // publisher-subscriber, по этому принципу работает addEventListener
	}
}

export default store;

window.store = store;