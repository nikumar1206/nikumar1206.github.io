import { Variants, motion } from "framer-motion";
import { allPosts } from "../shared/posts";
import Postcard from "./postCard";

const routeVariants = {
	initial: {
		y: "2vh",
		opacity: 0,
	},
	final: {
		y: "0vh",
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.4,
		},
	},
} as Variants;

const Posts = () => {
	return (
		<motion.section
			id="posts"
			variants={routeVariants}
			initial="initial"
			animate="final"
			className="md:w-[60%] w-[80%] mx-auto mt-16 flex flex-col gap-y-3"
		>
			{allPosts.map((post) => {
				return <Postcard post={post} key={post.date} />;
			})}
		</motion.section>
	);
};
export default Posts;
