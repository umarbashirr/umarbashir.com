import BlogPostForm from "@/app/(dashboard)/_components/BlogPostForm";
import PageTitle from "@/app/(dashboard)/_components/PageTitle";

const NewPostPage = () => {
  return (
    <div className="min-h-screen">
      {" "}
      <header className="flex items-center justify-between gap-4 w-full">
        <PageTitle title="New Blog Post" />
      </header>
      <div className="mt-10">
        <BlogPostForm />
      </div>
    </div>
  );
};

export default NewPostPage;
