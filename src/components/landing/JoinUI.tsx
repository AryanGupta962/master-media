"use client";

import { useState } from "react";
import JoinButton from "./Join/JoinButton";
import JoinModal from "./Join/JoinModal";

export default function JoinUI() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <JoinButton onClick={() => setOpen(true)} />

      {/* Modal */}
      <JoinModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
