
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPages: state.dialogsPages
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: () => {
			dispatch(sendMessageCreator());
		},
		sendMessage: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
	}
}

// второй вызов Dialogs это создаем контейнерную компоненту с помощью react-redux, мы Dialogs законнектили с store
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;