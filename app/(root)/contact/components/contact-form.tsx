"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const initialValues = {
  name: "",
  company: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [userData, setUserData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(userData);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    setIsLoading(false);
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Thanks For Your Submission",
      showConfirmButton: false,
      timer: 1500,
    });
    setUserData(initialValues);
    router.replace("/");
  };

  return (
    <form className="mt-8" onSubmit={handleFormSubmit} method="POST">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="hidden">
            Name
          </label>
          <input
            type="text"
            disabled={isLoading}
            placeholder="Your Name*"
            className="p-3 border-2 w-full rounded-md  focus:border-secondary-color focus:outline-none"
            autoFocus
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="compnay" className="hidden">
            Your Company
          </label>
          <input
            type="text"
            placeholder="Your Company*"
            disabled={isLoading}
            className="p-3 border-2 w-full  rounded-md  focus:border-secondary-color focus:outline-none"
            value={userData.company}
            onChange={(e) =>
              setUserData({ ...userData, company: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="hidden">
          Your Email
        </label>
        <input
          type="email"
          placeholder="Your Email*"
          disabled={isLoading}
          className="p-3 border-2 w-full  rounded-md  focus:border-secondary-color focus:outline-none"
          required
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="hidden">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          disabled={isLoading}
          cols={30}
          rows={10}
          required
          className="p-3 border-2 w-full  rounded-md  focus:border-secondary-color focus:outline-none resize-none"
          placeholder="Your Message*"
          value={userData.message}
          onChange={(e) =>
            setUserData({ ...userData, message: e.target.value })
          }
        ></textarea>
      </div>
      <button
        aria-labelledby="Submit Form Now"
        type="submit"
        disabled={isLoading}
        className="inline-flex mt-4 py-3 px-8 bg-secondary-color text-white rounded-md shadow-md disabled:cursor-wait disabled:border-1 disabled:border-[#ddd] disabled:bg-[#fafafa] disabled:text-[#ddd]"
      >
        Submit
      </button>
      {isLoading && (
        <p className="text-gray-800 text-sm mt-4">
          Please wait while we are sending your email...
        </p>
      )}
    </form>
  );
};

export default ContactForm;
