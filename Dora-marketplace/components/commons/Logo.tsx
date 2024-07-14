
import Link from "next/link";
import React from "react";

function Logo({ isMobile }: { isMobile?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-indigo-500 via-green-500 to-green-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        DORA Marketplace
      </p>
    </Link>
  );
}

export default Logo;
