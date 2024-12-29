import React from "react";
import Editor from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-800">
        Document Details - {documentId}
      </h1>
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
