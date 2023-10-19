"use client";

// import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillSketchCircle } from "react-icons/ai";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., send a request to your backend for authentication).
  };

  return (
    <div className=" flex justify-center items-center ">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        // onSubmit={handleSubmit}
      >
        <div className="flex min-h-full flex-col justify-center px-4 py-8 lg:px-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <AiFillSketchCircle className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>
        <div>
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            // "block rounded-sm bg-gray-100 text-gray-700 text-sm font-bold mb-2 w-100 h-200"
            type="email"
            id="email"
            required
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <label htmlFor="password">Password:</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6"
            // "block rounded-sm bg-gray-100 text-gray-700 text-sm font-bold mb-2 "
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            // autocomplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>

        {/* <Button> */}
        <div className="flex items-center justify-center">
          <Link href="/login/register">
            <p className="mt-10 text-center text-sm text-gray-500">
              Do not have an account?
              <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Click here to Sign Up
              </p>
            </p>
          </Link>
        </div>
        {/* </Button> */}
      </form>
    </div>
  );
}

export default LoginPage;
