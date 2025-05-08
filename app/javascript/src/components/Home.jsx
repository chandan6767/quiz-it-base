import React from "react";

import { Typography } from "@bigbinary/neetoui";

const Home = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-6">
    <Typography className="text-blue-500" style="h1">
      QuizIt Starter
    </Typography>
    <a
      className="rounded-2xl bg-slate-800 px-6 py-3 text-white shadow-md"
      href="https://github.com/chandan6767/quiz-it-base"
      rel="noreferrer"
      target="_blank"
    >
      GitHub
    </a>
  </main>
);

export default Home;
