import { Badge } from "../shared/projects";

const Badge = ({ name, value }: Badge) => {
	return (
		<div className="w-fit">
			<span className="bg-[var(--badge-bg)] text-[var(--badge-color)] uppercase font-bold mr-4 px-1 py-1 rounded-sm align-middle text-xs">
				{name}
			</span>
			<span>{value}</span>
		</div>
	);
};
export default Badge;
