import { TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { pxToRem } from "../utils/helper-functions";

const InputSection = () => {
	const [inputFields, setInputFields] = useState([
		{
			name: "location",
			label: "Enter your location",
			value: "",
			placeholder: "Enter address",
			required: true,
			errorMessage: "Location is required",
		},
		{
			name: "note",
			label: "Note (optional)",
			value: "",
			placeholder: "Enter text here",
		},
	]);

	const handleChange = (e) => {
		let updatedFields = [...inputFields];
		let matchedItemIndex = updatedFields.findIndex(
			(x) => x.name === e.target.name
		);
		if (matchedItemIndex > -1) {
			updatedFields[matchedItemIndex].value = e.target.value;
		}
		setInputFields(updatedFields);
	};

	return (
		<>
			{inputFields.map((field, index) => {
				const { label, placeholder, value, name } = field;
				return (
					<Fragment key={index}>
						<Typography sx={{ fontSize: pxToRem(22), fontWeight: 600 }}>
							{label}
						</Typography>
						<TextField
							sx={{
								margin: `${pxToRem(16)} 0 ${pxToRem(24)} 0`,
								borderRadius: `${pxToRem(12)} !important`,
							}}
							name={name}
							fullWidth
							placeholder={placeholder}
							id="outlined-error"
							value={value}
							onChange={(event) => {
								handleChange(event);
							}}
						/>
					</Fragment>
				);
			})}
		</>
	);
};

export default InputSection;
