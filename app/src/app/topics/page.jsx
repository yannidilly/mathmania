"use client";
import React from "react";
import Header from "./Header";
import CardSubject from "./CardSubject";

const Topics = () => {
  return (
    <main className="bg-custom-gray1 w-full h-screen font-custom">
      <div>
        <Header />
        <CardSubject />
      </div>
    </main>
  );
};

export default Topics;
