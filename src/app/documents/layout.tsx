import Link from "next/link";
import React from "react";

const DocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 p-4 flex gap-4">
        <Link href="/documents" className="text-white hover:text-gray-300">
          Documents
        </Link>
        <Link href="/documents/124" className="text-white hover:text-gray-300">
          Id
        </Link>
        <Link href="/documents/new" className="text-white hover:text-gray-300">
          New Document
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default DocumentsLayout;
