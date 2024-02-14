"use client";

import { useRef } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const BlogPostForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    const type = formType;

    const data = {
      title,
      description,
      type,
    };

    try {
      const { error } = await supabase
        .from("posts")
        .insert({
          title: title,
          description: description,
          isPublished: type === "PUBLISH" ? true : false,
          updated_at: new Date().toISOString(),
        })
        .single();

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error inserting data", error);
    }

    console.log(data);
  };

  return (
    <>
      <form className="flex flex-col gap-y-6">
        <div className="space-x-4 mb-10 flex items-center justify-end -mt-20">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e, "DRAFT")}
            className="border border-slate-950 text-slate-950 px-6 py-2 rounded-md shadow-md hover:bg-slate-950 hover:text-slate-100 duration-200 ease-in-out"
          >
            Draft
          </button>
          <button
            onClick={(e) => handleSubmit(e, "PUBLISH")}
            type="submit"
            className="border border-transparent bg-slate-950 hover:bg-slate-800 text-slate-100 px-6 py-2 rounded-md  duration-200 ease-in-out shadow-md"
          >
            Save & Publish
          </button>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl font-light">
            Blog Title
          </label>
          <input
            type="text"
            ref={titleRef}
            placeholder="Write an optimized blog title"
            className="text-3xl focus:outline-none focus:border-b focus:border-b-slate-950 border-b border-b-transparent font-light py-2 mt-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl font-light">
            Blog Description
          </label>
          <textarea
            ref={descriptionRef}
            placeholder="Write your blog description"
            className="min-h-[500px] text-3xl focus:outline-none font-light py-2 mt-2 resize-none"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default BlogPostForm;
