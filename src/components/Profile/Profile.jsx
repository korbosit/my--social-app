import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
   return (
		<div>
			<div className={s.content__image}>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u6_4OALQDJaY9EPmzp8E-35kSySl_vWqmg&usqp=CAU" />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
   );
};

export default Profile;