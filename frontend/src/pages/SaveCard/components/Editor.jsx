import React, { useState } from "react";
import "./Editor.css";
import "highlight.js/styles/stackoverflow-dark.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
	const [code, setCode] = useState("");

	const handleProcedureContentChange = (content, delta, source, editor) => {
		const contentJson = editor.getContents();
		setCode(contentJson);
	};

	const modules = {
		syntax: true,
		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],
			["formula"][({ header: 1 }, { header: 2 })], // custom button values
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }], // superscript/subscript
			[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
			[{ size: ["small", false, "large", "huge"] }], // custom dropdown
			[{ color: [] }], // dropdown with defaults from theme
			[{ align: [] }],
			["clean"],
		],
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"formula",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"code-block",
		"script",
		"size",
		"color",
	];
	return (
		<ReactQuill
			className="material-textfield"
			value={code}
			placeholder="Enter Your Answer"
			style={{ height: "240px" }}
			onChange={handleProcedureContentChange}
			theme="snow"
			modules={modules}
			formats={formats}
		></ReactQuill>
	);
}
