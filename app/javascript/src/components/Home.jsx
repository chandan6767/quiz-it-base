import React from "react";

import BrowserPreview from "@bigbinary/neeto-molecules/BrowserPreview";
import { Typography } from "@bigbinary/neetoui";

const Home = () => (
  <main className="flex h-screen flex-col items-center justify-center gap-6">
    <div className="w-96">
      <BrowserPreview className="p-6">
        <div className="flex h-full items-center justify-center">
          <Typography className="text-center" style="body2">
            This is the body of the browser preview
          </Typography>
        </div>
      </BrowserPreview>
    </div>
  </main>
);

export default Home;
