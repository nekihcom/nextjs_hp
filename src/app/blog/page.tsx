import { getAllPostsData } from "@/lib/post";
import { TPost } from "@/type/type";
import Post from "./post";

async function Page(){
  const posts = await getAllPostsData();
  return (
    <>
      <ul className="m-10">
        {posts && posts.map((post:TPost) => <Post key={post.id} post={post} />)}
      </ul>
    </>
  )
};

Page.displayName = "Page";
export default Page;