import { Outlet } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { useScrollReveal } from "./hooks/useScrollReveal";

function LayoutContent() {
  useScrollReveal();
  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

export function Layout() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--1" aria-hidden="true" />
      <div className="bg-glow bg-glow--2" aria-hidden="true" />
      <LayoutContent />
    </div>
  );
}
