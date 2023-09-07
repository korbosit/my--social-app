import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 1},
		{id: 2, message: 'Its my first posts', likesCount: 5},
		{id: 3, message: 'im fine', likesCount: 7},
		{id: 4, message: 'and you', likesCount: 23},
		{id: 5, message: 'How old are you', likesCount: 75},
		{id: 6, message: 'You are the best', likesCount: 101},
	]

   return (
      <div className={s.postBlock}>
         <h3>My posts</h3>
         <div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
         <div className={s.posts}>
				<Post message={postData[0].message} likesCount={postData[0].likesCount} />
				<Post message={postData[1].message} likesCount={postData[1].likesCount} />
				<Post message={postData[2].message} likesCount={postData[2].likesCount} />
				<Post message={postData[3].message} likesCount={postData[3].likesCount} />
				<Post message={postData[4].message} likesCount={postData[4].likesCount} />
				<Post message={postData[5].message} likesCount={postData[5].likesCount} />
				
         </div>
      </div>
   );
};

export default MyPosts;