import { forwardRef, useState } from "react";

import { Dialog, Slide } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initialValues, validations } from "../../schemas/input-section.js";

import Content from "./Content";
import Actions from "./Actions";
import Title from "./Title";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogComponent() {
	const [open] = useState(true);

	const {
		handleSubmit,
		getValues,
		formState: { errors },
		control,
	} = useForm({
		mode: "onSubmit",
		defaultValues: initialValues,
		reValidateMode: "onChange",
		criteriaMode: "firstError",
		shouldFocusError: true,
		resolver: yupResolver(validations),
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted={true}
				hideBackdrop={true}
				aria-describedby="alert-dialog-slide-description"
				sx={{
					"& .MuiPaper-root": {
						width: { xs: "90vw", sm: "80%", md: "70%", lg: "60%" },
						margin: 0,
						boxShadow: "0px 6px 200px 0px rgba(113, 128, 150, 0.12) !important",
						borderRadius: "20px",
					},
				}}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Title />
					<Content values={getValues()} errors={errors} control={control} />
					<Actions />
				</form>
			</Dialog>
		</>
	);
}
