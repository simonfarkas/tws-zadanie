import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  child: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ child }: Props) => {
  return (
    <>
      <Header />
      {child}
      <Footer />
    </>
  );
};
