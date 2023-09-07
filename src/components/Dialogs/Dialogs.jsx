import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	
	let path = '/dialogs/' + props.id;

	return(
		<div className={s.dialog + ' ' + s.active}>
	<NavLink to={path}>{props.name}</NavLink>
	</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Vovanec'},
		{id: 2, name: 'Sveta'},
		{id: 3, name: 'Alfa'},
		{id: 4, name: 'Beta'},
		{id: 5, name: 'Mikki'},
		{id: 6, name: 'Timka'},
	]
	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hello'},
		{id: 3, message: 'Привет'},
		{id: 4, message: 'Здравствуйте'},
		{id: 5, message: 'Добрый день'},
		{id: 6, message: 'Добрый вечер'},
	]

   return (	
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
					<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
					<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
					<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
					<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
					<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
					<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
					<Message message={messagesData[0].message} />
					<Message message={messagesData[1].message} />
					<Message message={messagesData[2].message} />
					<Message message={messagesData[3].message} />
					<Message message={messagesData[4].message} />
					<Message message={messagesData[5].message} />
            </div>
         </div>
      </div>
   );
}

export default Dialogs;