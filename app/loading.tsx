"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-linear-to-br
        from-[#0a0f2c]
        via-[#0b143a]
        to-[#050814]
      "
    >

      <div className="grid grid-cols-2 gap-3">
        <span className="loader-box delay-0" />
        <span className="loader-box delay-150" />
        <span className="loader-box delay-300" />
        <span className="loader-box delay-450" />
      </div>
    </div>
  );
}
