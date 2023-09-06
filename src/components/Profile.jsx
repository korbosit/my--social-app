import s from './Profile.module.css';

const Profile = () => {
   return (
		<div className={s.content}>
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u6_4OALQDJaY9EPmzp8E-35kSySl_vWqmg&usqp=CAU" />
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div className={s.posts}>
					<div className={s.item}>
						post 1
					</div>
					<div className={s.item}>
						post 2
					</div>
				</div>
			</div>
		</div>
   );
};

export default Profile;