import React from "react";

const AdminPageTitle = ({ title }: { title: string }) => {
  return (
    <div className="admin_page_title mb-10">
      <h1 className="bg-indigo-100 p-2 border-l-8 border-dark-primary-color">
        {title}
      </h1>
    </div>
  );
};

export default AdminPageTitle;
