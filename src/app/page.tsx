"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen align-middle justify-center bg-red-400">
      <div className="flex gap-4">
        <Link href="/documents">
          <Button>Documents</Button>
        </Link>
        <Link href="/documents/1">
          <Button>Document 1</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
