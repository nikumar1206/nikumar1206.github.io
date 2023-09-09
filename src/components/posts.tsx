import { allPosts } from "../shared/posts";
import Postcard from "./postCard";

export interface PostData {
	id: number;
	title: string;
	date: string;
	description: string;
	body?: string;
	link: string;
	tags: string[];
}

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
