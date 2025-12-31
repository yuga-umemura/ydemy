"use server";

import Header from "../../components/client/Header";
import { RootTemplateProps } from "./type";

export const RootTemplate = async ({ children }: RootTemplateProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
