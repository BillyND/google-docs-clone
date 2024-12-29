"use client";

import { useWindowSize } from "@/hooks/use-window-size";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { HEIGHT_WIDTH_RATIO, MAX_EDITOR_CONTAINER_WIDTH } from "./constants";

const Editor = () => {
  const windowSize = useWindowSize();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable an included extension
        history: false,

        // Configure an included extension
        heading: {
          levels: [1, 2],
        },
      }),
      Document,
      Paragraph,
      Text,
    ],
    editorProps: {
      attributes: {
        class: `focus:outline-none border border-gray-300 w-[calc(100vw-2rem)] max-w-[${MAX_EDITOR_CONTAINER_WIDTH}px] cursor-text text-base`,
      },
    },
    content: `Hello`,
  });

  useEffect(() => {
    const editorContainer = document.querySelector(".tiptap") as HTMLElement;

    // Update the height of the editor container based on the width
    if (editorContainer) {
      const width = editorContainer.clientWidth;
      editorContainer.style.height = `${HEIGHT_WIDTH_RATIO * width}px`;
    }
  }, [windowSize]);

  return (
    <div className="w-full h-full flex justify-center items-center p-10">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
