const SinglePost = ({ post }: { post: any }) => {
  return (
    <article className="shadow-md rounded-xl p-6 border ">
      <h2 className="text-xl mb-4">{post?.title}</h2>
      <p className="text-base text-slate-700">
        {post?.description?.slice(0, 150)}...
      </p>
    </article>
  );
};

export default SinglePost;
