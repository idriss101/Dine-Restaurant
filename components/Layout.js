import React from "react";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>`
    </div>
  );
}
