import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-container">{children}</main>
    </div>
  );
}
