import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 1},
		{id: 2, message: 'Its my first posts', likesCount: 5},
		{id: 3, message: 'im fine', likesCount: 7},
		{id: 4, message: 'and you', likesCount: 23},
		{id: 5, message: 'How old are you', likesCount: 75},
		{id: 6, message: 'You are the best', likesCount: 101},
	]

	let postsElements = posts.map( (p) => <Post message={p.message} likesCount={p.likesCount} /> )

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
				{postsElements}
         </div>
      </div>
   );
};

export default MyPosts;