import React from "react";
import Editor from "./editor";

interface DocumentIdProps {
  params: {
    documentId: string | "new";
  };
}

const DocumentsIdPage = ({ params }: DocumentIdProps) => {
  const { documentId } = params;
  const isNewDocument = documentId === "new";

  return (
    <div className="flex flex-col ">
      {isNewDocument ? <div>New Document</div> : <>Document id: {documentId}</>}

      <Editor />
    </div>
  );
};

export default DocumentsIdPage;
