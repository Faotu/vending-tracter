"use client";

import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";

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
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            className="block rounded-sm bg-gray-100 text-gray-700 text-sm font-bold mb-2"
            type="email"
            id="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="block rounded-sm bg-gray-100 text-gray-700 text-sm font-bold mb-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Button type="submit" className="w-200">
            <h2>Login</h2>
          </Button>

          {/* <button type="submit" className="">Login</button> */}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
