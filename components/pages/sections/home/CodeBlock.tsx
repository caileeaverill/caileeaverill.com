"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export default function AboutCodeBlock() {
  const code = `{
  "name": "Cailee Averill",
  "location": "Ontario, Canada (UTC-5)",
  "focusAreas": [
    "Frontend Development",
    "React",
    "Tailwind CSS"
    ],
  "currentlyLearning": [
    "Business-aligned software solutions"
    "Data Structures & Algorithms"
  ],
  "fun": {
    "dogOwner": true,
    "favouriteMovie":"Ex Machina",
    "likesPineappleOnPizza": true
  }
}`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="json"
        filename="about-me.json"
        highlightLines={[2, 9, 16]}
        code={code}
      />
    </div>
  );
}
