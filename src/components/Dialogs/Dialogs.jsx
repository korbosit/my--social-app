
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'; 



const Dialogs = (props) => {
	let state = props.dialogsPages;

	let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );
	let messagesElements = state.messages.map( (m) => <Message message={m.message} /> );
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

   return (	
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
					{dialogsElements}
            </div>
            <div className={s.messages}>
					<div>{messagesElements}</div>
					<div>
						<div><textarea value={newMessageBody}
											onChange={onNewMessageChange}
											placeholder='Enter your message'></textarea></div>
						<div><button onClick={ onSendMessageClick }>Send</button></div>
					</div>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;