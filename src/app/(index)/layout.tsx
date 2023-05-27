import { ReactNode } from "react";

export default function SlideLayout({ children }: { children: ReactNode }) {
  return <div className={"bg-none"}>{children}</div>;
}