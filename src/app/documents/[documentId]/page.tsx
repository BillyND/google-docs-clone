import React from "react";

interface DocumentIdProps {
  params: {
    documentId: string | "new";
  };
}

const DocumentsIdPage = ({ params }: DocumentIdProps) => {
  const { documentId } = params;
  const isNewDocument = documentId === "new";

  if (isNewDocument) {
    return <div>New Document</div>;
  }

  return <div>Document ID page: {documentId}</div>;
};

export default DocumentsIdPage;
