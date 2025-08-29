"use client";

import React, { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import CodeBlock from "@tiptap/extension-code-block";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import UnderlineExtension from "@tiptap/extension-underline";
import { uploadAPI } from "@/lib/axios";
import { Undo2, Redo2, Bold, Italic, Underline as UnderlineIcon, Strikethrough, Highlighter, Palette, List, ListOrdered, Link as LinkIcon, AlignLeft, AlignCenter, AlignRight, Paperclip, Image as ImageIcon } from "lucide-react";

export default function RichTextEditor({ content, onContentChange, onImageAdded }) {
  const [mounted, setMounted] = useState(false);
  const imageFileInputRef = useRef(null);
  const colorInputRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Highlight,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      Link.configure({ openOnClick: false }),
      CodeBlock,
      Subscript,
      Superscript,
      UnderlineExtension,
    ],
    content,
    onUpdate: ({ editor }) => onContentChange(editor.getHTML()),
    editorProps: { attributes: { class: "prose prose-sm sm:prose-lg xl:prose-2xl mx-auto focus:outline-none" } },
    immediatelyRender: false,
  });

  if (!mounted || !editor) return <div className="p-4 min-h-[300px] bg-gray-50 rounded-xl flex items-center justify-center">Loading editor...</div>;

  const addImageFromUrl = () => {
    const url = window.prompt("Enter image URL:");
    if (url) { editor.chain().focus().setImage({ src: url }).run(); onImageAdded?.(url); }
  };
  const onPickLocalImage = () => imageFileInputRef.current?.click();
  const handleLocalImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await uploadAPI.image(formData);
      const uploadedUrl = res?.data?.url || res?.data?.data?.url;
      if (uploadedUrl) { editor.chain().focus().setImage({ src: uploadedUrl }).run(); onImageAdded?.(uploadedUrl); }
    } finally { e.target.value = ""; }
  };

  const setHeadingLevel = (value) => { const level = Number(value); if (level === 0) { editor.chain().focus().setParagraph().run(); return; } editor.chain().focus().toggleHeading({ level }).run(); };
  const openColorPicker = () => colorInputRef.current?.click();
  const handleColorChange = (e) => { const color = e.target.value; if (!color) return; editor.chain().focus().setColor(color).run(); };
  const toggleTextStyle = (style) => { if (style==='bold') editor.chain().focus().toggleBold().run(); else if (style==='italic') editor.chain().focus().toggleItalic().run(); else if (style==='underline') editor.chain().focus().toggleUnderline().run(); else if (style==='strike') editor.chain().focus().toggleStrike().run(); };
  const toggleList = (type) => { if (type==='bullet') editor.chain().focus().toggleBulletList().run(); else if (type==='ordered') editor.chain().focus().toggleOrderedList().run(); };
  const setTextAlign = (align) => editor.chain().focus().setTextAlign(align).run();
  const toggleBlock = (type) => { if (type==='blockquote') editor.chain().focus().toggleBlockquote().run(); else if (type==='codeBlock') editor.chain().focus().toggleCodeBlock().run(); };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <input ref={imageFileInputRef} type="file" accept="image/*" className="hidden" onChange={handleLocalImageChange} />
      <input ref={colorInputRef} type="color" className="hidden" onChange={handleColorChange} />
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center gap-1 p-3 border-b border-gray-100">
          <button onClick={() => editor.chain().focus().undo().run()} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Undo"><Undo2 size={18} /></button>
          <button onClick={() => editor.chain().focus().redo().run()} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Redo"><Redo2 size={18} /></button>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button onClick={() => toggleTextStyle('bold')} className={`p-2 rounded-lg transition-colors ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Bold"><Bold size={18} /></button>
          <button onClick={() => toggleTextStyle('italic')} className={`p-2 rounded-lg transition-colors ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Italic"><Italic size={18} /></button>
          <button onClick={() => toggleTextStyle('underline')} className={`p-2 rounded-lg transition-colors ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Underline"><UnderlineIcon size={18} /></button>
          <button onClick={() => toggleTextStyle('strike')} className={`p-2 rounded-lg transition-colors ${editor.isActive('strike') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Strikethrough"><Strikethrough size={18} /></button>
          <div className="flex items-center gap-1">
            <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={`p-2 rounded-lg transition-colors ${editor.isActive('highlight') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Highlight"><Highlighter size={18} /></button>
            <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#fbbf24' }).run()} className={`p-2 rounded-lg transition-colors ${editor.isActive('highlight') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Yellow Highlight"><Highlighter size={18} className="text-yellow-500" /></button>
            <button onClick={openColorPicker} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Text Color"><Palette size={18} /></button>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <select className="text-sm border border-gray-200 rounded-lg px-2 py-1 text-gray-700 bg-white hover:bg-gray-50" value={editor.isActive('heading', { level: 1 }) ? 1 : editor.isActive('heading', { level: 2 }) ? 2 : editor.isActive('heading', { level: 3 }) ? 3 : 0} onChange={(e) => setHeadingLevel(e.target.value)} title="Text Style">
              <option value={0}>Normal Text</option>
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
            </select>
          </div>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button onClick={() => setTextAlign('left')} className={`p-2 rounded-lg transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Align Left"><AlignLeft size={18} /></button>
          <button onClick={() => setTextAlign('center')} className={`p-2 rounded-lg transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Align Center"><AlignCenter size={18} /></button>
          <button onClick={() => setTextAlign('right')} className={`p-2 rounded-lg transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Align Right"><AlignRight size={18} /></button>
          <button onClick={() => toggleList('bullet')} className={`p-2 rounded-lg transition-colors ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Bullet List"><List size={18} /></button>
          <button onClick={() => toggleList('ordered')} className={`p-2 rounded-lg transition-colors ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Numbered List"><ListOrdered size={18} /></button>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button onClick={() => { if (editor.isActive('link')) editor.chain().focus().unsetLink().run(); else { const url = window.prompt('Enter URL:'); if (url) editor.chain().focus().setLink({ href: url }).run(); } }} className={`p-2 rounded-lg transition-colors ${editor.isActive('link') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Insert Link"><LinkIcon size={18} /></button>
          <button onClick={onPickLocalImage} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Insert Image"><ImageIcon size={18} /></button>
          <button onClick={addImageFromUrl} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Insert Image from URL"><span className="text-xs">URL</span></button>
          <span className="text-sm text-gray-500 px-2">GIF</span>
        </div>
        <div className="flex items-center gap-1 p-3">
          <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Insert Table"><span className="text-sm">⊞</span></button>
          <div className="w-px h-6 bg-gray-200 mx-1"></div>
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-2 rounded-lg transition-colors ${editor.isActive('blockquote') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Blockquote"><span className="text-sm">"</span></button>
          <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`p-2 rounded-lg transition-colors ${editor.isActive('codeBlock') ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`} title="Code Block"><span className="text-sm font-mono">{'</>'}</span></button>
          <button className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Math Symbol"><span className="text-sm">Σ</span></button>
          <button className="p-2 rounded-lg transition-colors text-gray-500 hover:bg-gray-100" title="Attachment"><Paperclip size={18} /></button>
        </div>
      </div>
      <div className="p-6 min-h-[400px]"><EditorContent editor={editor} /></div>
    </div>
  );
}


