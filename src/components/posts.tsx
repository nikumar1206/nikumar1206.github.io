import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { allPosts } from "@/shared/posts";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Input } from "./ui/input";
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
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const filteredPosts = allPosts.filter((post) => {
      return post.tags.some((tag) => tag.toLowerCase().includes(value));
    });
    setFilteredPosts(filteredPosts);
  };
  return (
    <motion.section
      id="posts"
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="md:w-[60%] w-[80%] mx-auto mt-16 flex flex-col gap-y-3"
    >
      <Input
        onChange={handleInputChange}
        placeholder="Search by tag"
        type="text"
        className="border-black dark:border-white flex self-end w-[300px] transition-all duration-300 ease-in-out focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none"
      />
      <Table className="px-4 py-4 border-black">
        {filteredPosts.length === 0 && (
          <TableCaption className="text-center">No post found.</TableCaption>
        )}
        <TableHeader className="border-b-2 border-black dark:border-white">
          <TableRow>
            <TableHead className="text-lg font-semibold">Date</TableHead>
            <TableHead className="text-lg font-semibold">Title</TableHead>
            <TableHead className="text-lg font-semibold">Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => {
            return (
              <Link key={post.id} to={post.link} className="cursor-pointer">
                <TableRow
                  key={post.id}
                  className="border-b-[1px] border-black dark:border-white"
                >
                  <TableCell className="">{post.date}</TableCell>
                  <TableCell className="font-normal text-[1rem]">
                    {post.title}
                  </TableCell>
                  <TableCell className="flex gap-x-1 flex-wrap gap-y-1">
                    {post.tags.map((tag, i) => {
                      return (
                        <span
                          className="bg-[var(--badge-bg)] text-[var(--badge-color)] uppercase font-bold px-1 py-1 rounded-sm align-middle text-xs"
                          key={i}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </TableCell>
                </TableRow>
              </Link>
            );
          })}
        </TableBody>
      </Table>
    </motion.section>
  );
};
export default Posts;
