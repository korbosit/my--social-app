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
   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
					<DialogItem name='Vovanec' id='1' />
					<DialogItem name='Sveta' id='2' />
					<DialogItem name='Alfa' id='3' />
					<DialogItem name='Beta' id='4' />
					<DialogItem name='Mikki' id='5' />
					<DialogItem name='Timka' id='6' />
            </div>
            <div className={s.messages}>
               <Message message='Hi' />
               <Message message='How are you?' />
               <Message message='Yo-yo-yo' />
            </div>
         </div>
      </div>
   );
}

export default Dialogs;