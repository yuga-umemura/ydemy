import type { Metadata } from "next";
import "../globals.scss";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
