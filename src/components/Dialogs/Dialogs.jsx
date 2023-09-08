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

	let dialogs = [
		{id: 1, name: 'Vovanec'},
		{id: 2, name: 'Sveta'},
		{id: 3, name: 'Alfa'},
		{id: 4, name: 'Beta'},
		{id: 5, name: 'Mikki'},
		{id: 6, name: 'Timka'},
	]

	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hello'},
		{id: 3, message: 'Привет'},
		{id: 4, message: 'Здравствуйте'},
		{id: 5, message: 'Добрый день'},
		{id: 6, message: 'Добрый вечер'},
	]


	let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );
		
	let messagesElements = messages.map( (m) => <Message message={m.message} /> )

   return (	
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
					{dialogsElements}
            </div>
            <div className={s.messages}>
					{messagesElements}
            </div>
         </div>
      </div>
   );
}

export default Dialogs;