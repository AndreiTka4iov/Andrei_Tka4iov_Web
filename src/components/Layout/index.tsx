import React from "react";
import { Stack } from "@mantine/core";
import Header from "../Header";
import { Roboto } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={roboto.className}>
      <Header />
      <Stack p={10}>
        {children}
      </Stack>
    </main>
  );
};

export default Layout;
