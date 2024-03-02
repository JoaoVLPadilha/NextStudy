import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu/menu";


export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
        </body>
    </html>
  );
}
