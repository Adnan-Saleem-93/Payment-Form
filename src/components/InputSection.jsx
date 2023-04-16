import { Controller } from "react-hook-form";
import { form } from "../schemas/input-section";
import Input from "./Form/Input";
import { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { pxToRem } from "../utils/helper-functions";

const InputSection = ({ values, errors, control }) => {
	const [inputFields, setInputFields] = useState([]);

	const updateFields = useCallback(() => {
		let updatedInputFields = [];
		for (let field in form) {
			let { name, type, label, placeholder } = form[field];
			let value = values[name];
			let error = errors ? errors[name] : null;
			updatedInputFields.push({
				name,
				label,
				placeholder,
				value,
				type,
				error,
			});
		}

		setInputFields(updatedInputFields);
	}, [values, errors]);

	useEffect(() => {
		updateFields();

		return () => {
			setInputFields([]);
		};
	}, [updateFields]);

	return inputFields.map((input, index) => {
		const { name, type, error, label, placeholder, value } = input;
		return (
			<Box key={index} sx={{ margin: `0 0 ${pxToRem(24)} 0` }}>
				<Controller
					name={name}
					defaultValue={value}
					control={control}
					render={({ field }) => {
						return (
							type === "text" && (
								<Input
									{...field}
									label={label}
									name={name}
									placeholder={placeholder}
									error={error}
								/>
							)
						);
					}}
				/>

				{error && (
					<Typography color="error" variant="caption">
						{error.message}
					</Typography>
				)}
			</Box>
		);
	});
};

export default InputSection;
