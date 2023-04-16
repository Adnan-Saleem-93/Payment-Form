import * as Yup from "yup";

export const form = {
	location: {
		name: "location",
		label: "Enter your location",
		placeholder: "Enter address",
		type: "text",
		required: true,
		errorMsg: "Location is required",
	},
	note: {
		name: "note",
		label: "Note (optional)",
		type: "text",
		placeholder: "Enter text here",
	},
};

const { location, note } = form;

export const initialValues = {
	[location.name]: "",
	[note.name]: "",
};

export const validations = Yup.object().shape({
	[location.name]: Yup.string().required(location.errorMsg),
	[note.name]: Yup.string(),
});
