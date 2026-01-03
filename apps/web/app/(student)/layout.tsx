import type { Metadata } from "next";
import "../globals.scss";
import { RootTemplate } from "../ui/templates/root";

export const metadata: Metadata = {
  title: "オンラインコース - いろんなことを、あなたのペースで | Ydemy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <RootTemplate>
          <main>{children}</main>
        </RootTemplate>
      </body>
    </html>
  );
}
