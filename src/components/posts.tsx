import { allPosts } from "../shared/posts";
import Postcard from "./postCard";

const Posts = () => {
	return (
		<section className="w-[60%] mx-auto mt-20 flex flex-col gap-y-3">
			{allPosts.map((post) => {
				return <Postcard post={post} key={post.date} />;
			})}
		</section>
	);
};
export default Posts;
