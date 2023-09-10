import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "wouter";
import { PostData } from "../shared/posts";
const Postcard = ({ post }: { post: PostData }) => {
	const { title } = post;

	return (
		<div className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer">
			<motion.div
				initial={false}
				className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
			>
				<div>
					<motion.p
						initial={false}
						animate={{
							color: "rgba(0, 0, 0, 0)",
						}}
						className="text-xl font-medium w-fit bg-gradient-to-r from-[var(--mteal)] to-[var(--dteal)] bg-clip-text"
					>
						{title}
					</motion.p>
					<motion.p
						initial={false}
						animate={{
							opacity: 1,
						}}
						className="mt-4 bg-gradient-to-r from-[var(--mteal)] to-[var(--dteal)] bg-clip-text text-transparent"
					>
						{post.description}
					</motion.p>
				</div>
				<Link to={post.link}>
					<motion.button
						initial={false}
						animate={{
							opacity: 1,
						}}
						className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-[var(--mteal)] to-[var(--dteal)] text-white"
					>
						<span>Read More</span>
						<FiArrowRight className="group-hover:translate-x-1 transition-transform" />
					</motion.button>
				</Link>
			</motion.div>
			<motion.div
				initial={false}
				animate={{
					opacity: 1,
				}}
				className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--mteal)] to-[var(--dteal)]"
			/>
			<div className="absolute inset-0 z-0 bg-slate-200" />
		</div>
	);
};

export default Postcard;
