import { TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { pxToRem } from "../../utils/helper-functions";

const Input = ({ label, ...rest }) => {
	return (
		<Fragment>
			<Typography
				sx={{
					fontSize: pxToRem(22),
					fontWeight: 600,
				}}
			>
				{label}
			</Typography>
			<TextField
				{...rest}
				sx={{
					marginTop: `${pxToRem(16)}`,
					borderRadius: `${pxToRem(12)} !important`,
				}}
				fullWidth
				id="outlined-error"
			/>
		</Fragment>
	);
};

export default Input;
