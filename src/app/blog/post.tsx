import Link from "next/link";
import { FC, memo } from "react";


type Props = {
  post: {
    id:number, 
    title:string
  };
}
const Post:FC<Props> = memo((props) => {
  const { post } = props;

  return (
    <>
      <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/blog/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
    </>
  )
});

Post.displayName = "Post";
export default Post;