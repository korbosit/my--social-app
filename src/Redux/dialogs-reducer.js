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

const dialogsReducer = (state, action) => {
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