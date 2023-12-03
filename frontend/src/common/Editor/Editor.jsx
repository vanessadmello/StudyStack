import React from "react";
import "highlight.js/styles/stackoverflow-dark.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";

export default function Editor({ isReadOnly, answer, onChange }) {
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

	return isReadOnly ? (
		<ReactQuill
			value={answer}
			style={{ height: "260px" }}
			theme="snow"
			modules={{
				toolbar: false,
				syntax: true,
			}}
			readOnly={true}
		/>
	) : (
		<ReactQuill
			defaultValue={answer}
			placeholder="Enter Your Answer"
			style={{ height: "260px" }}
			onChange={onChange}
			theme="snow"
			modules={modules}
			formats={formats}
		/>
	);
}
