const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

// reducer - это чистая функция которая принимает state, action если нужнр применяет этот action к state и возвращает новый state либо же возвращает state, который был до этого не измененным, который пришел в этот reducer, те не изменяет его если action Не подошел

// const dialogsReducer = (state, action) => {
// 	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
// 		state.newMessageBody = action.body;
// 	} else if (action.type === SEND_MESSAGE) {
// 		let body = state.newMessageBody;
// 		state.newMessageBody = "";
// 		state.messages.push({ id: 6, message: body });
// 	}

// 	return state;
// }

let initialState = {
	dialogs: [
		{ id: 1, name: "Vovanec" },
		{ id: 2, name: "Sveta" },
		{ id: 3, name: "Alfa" },
		{ id: 4, name: "Beta" },
		{ id: 5, name: "Mikki" },
		{ id: 6, name: "Timka" },
	],
	messages: [
		{ id: 1, message: "Hi" },
		{ id: 2, message: "Hello" },
		{ id: 3, message: "Привет" },
		{ id: 4, message: "Здравствуйте" },
		{ id: 5, message: "Добрый день" },
		{ id: 6, message: "Добрый вечер" },
	],
	newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({id: 6, message: body});
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})	
export const updateNewMessageBodyCreator = (body) => ({
		type: UPDATE_NEW_MESSAGE_BODY,
		body : body
})

export default dialogsReducer;