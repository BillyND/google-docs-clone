import React from "react";

interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="text-lg font-bold">My Application</div>
        <div className="space-x-4">
          <a href="/documents" className="hover:text-gray-400">
            Documents
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>
      <main className="flex flex-col flex-1 bg-gray-50 p-4">{children}</main>
    </div>
  );
};

export default DocumentsLayout;
