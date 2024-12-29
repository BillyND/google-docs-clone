"use client";

import { Button } from "@/components/ui/button";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Italic from "@tiptap/extension-italic";
import OrderedList from "@tiptap/extension-ordered-list";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FiBold, FiItalic, FiList, FiUnderline } from "react-icons/fi"; // Updated import for ordered list icon

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, BulletList, OrderedList],
    content: "<p>Start writing your document...</p>",
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col w-full h-full border border-gray-300 shadow-md rounded-lg">
      {/* Menu Bar */}
      <div className="flex items-center justify-start gap-2 px-4 py-2 bg-gray-100 border-b border-gray-300">
        <Button
          variant="ghost"
          className={`${
            editor.isActive("bold") ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FiBold className="mr-1" />
        </Button>
        <Button
          variant="ghost"
          className={`${
            editor.isActive("italic") ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FiItalic className="mr-1" />
        </Button>
        <Button
          variant="ghost"
          className={`${
            editor.isActive("underline") ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FiUnderline className="mr-1" />
        </Button>
        <Button
          variant="ghost"
          className={`${
            editor.isActive("bulletList") ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FiList className="mr-1" />
        </Button>
        <Button
          variant="ghost"
          className={`${
            editor.isActive("orderedList") ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <FiList className="mr-1" />
        </Button>
      </div>

      {/* Editor Content */}
      <div className="p-4 h-full overflow-auto bg-white">
        <EditorContent editor={editor} className="prose max-w-none" />
      </div>
    </div>
  );
};

export default Editor;
