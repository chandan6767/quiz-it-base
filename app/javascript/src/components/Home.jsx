import React from "react";

import { ExternalLink } from "@bigbinary/neeto-icons";
import BrowserPreview from "@bigbinary/neeto-molecules/BrowserPreview";
import { Typography } from "@bigbinary/neetoui";

const Home = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-6">
    <div className="w-1/3">
      <BrowserPreview className="p-6">
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <Typography className="text-center" style="body1">
            This is the starter template for quiz-it project.
          </Typography>
          <a
            className="flex items-center justify-center rounded-2xl bg-slate-800 px-6 py-3 text-white shadow-md"
            href="https://github.com/chandan6767/quiz-it-base"
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </BrowserPreview>
    </div>
  </main>
);

export default Home;
