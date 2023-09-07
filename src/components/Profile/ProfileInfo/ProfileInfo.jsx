import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
		<div>
			<div className={s.content__image}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u6_4OALQDJaY9EPmzp8E-35kSySl_vWqmg&usqp=CAU" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
   );
};

export default ProfileInfo;