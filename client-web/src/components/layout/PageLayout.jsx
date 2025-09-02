import React from "react";
import Background from "./Background";

export default function PageLayout({ children }) {
  return (
    <Background>
      <main className="flex flex-col items-center pt-28">{children}</main>
    </Background>
  );
}
