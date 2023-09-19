
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPages;


	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}
	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}



   return (	
		<Dialogs updateNewMessageBody={onNewMessageChange}
					sendMessage={onSendMessageClick}
					dialogsPages={state}
					/>
   );
}

export default DialogsContainer;