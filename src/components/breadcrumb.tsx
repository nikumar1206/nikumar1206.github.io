import { useLocation } from "wouter";

const Breadcrumb = () => {
	const location = useLocation();
	console.log(location);

	return (
		<div className="breadcrumb">
			<div className="breadcrumb__item">
				<a href="#">Home</a>
			</div>
			<div className="breadcrumb__item">
				<a href="#">Blog</a>
			</div>
			<div className="breadcrumb__item">
				<a href="#">Post</a>
			</div>
		</div>
	);
};
export default Breadcrumb;
