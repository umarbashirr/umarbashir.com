import supabaseClient from "@/config/supabase-client";
import Link from "next/link";
import PageTitle from "../../_components/PageTitle";
import SinglePost from "../../_components/SinglePost";

const PostListPage = async () => {
  const { data } = await supabaseClient.from("posts").select();

  return (
    <div>
      <header className="flex items-center justify-between gap-4 w-full">
        <PageTitle title="All Posts" />
        <Link
          href="/admin/posts/new"
          className="bg-slate-950 text-slate-100 px-6 py-2 rounded-md shadow-md"
        >
          Write Post
        </Link>
      </header>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
          {data?.map((post) => {
            return <SinglePost key={post.id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
