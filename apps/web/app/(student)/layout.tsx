import type { Metadata } from "next";
import "../globals.scss";
import Header from "../ui/widgets/Header";

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
