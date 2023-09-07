import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div>
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               <div className={s.dialog + ' ' + s.active}>
						<NavLink to="/dialogs/1">Vovanec</NavLink>
					</div>
               <div className={s.dialog}>
						<NavLink to="/dialogs/2">Sveta</NavLink>
					</div>
               <div className={s.dialog}>
						<NavLink to="/dialogs/3">Alfa</NavLink>
					</div>
               <div className={s.dialog}>
						<NavLink to="/dialogs/4">Beta</NavLink>
					</div>
               <div className={s.dialog}>
						<NavLink to="/dialogs/5">Mikki</NavLink>
					</div>
               <div className={s.dialog}>
						<NavLink to="/dialogs/6">Timka</NavLink>
					</div>
            </div>
            <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How are you?</div>
               <div className={s.message}>Yo-yo-yo</div>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;