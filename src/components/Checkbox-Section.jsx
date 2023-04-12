import { Box, Checkbox, Typography } from "@mui/material";
import { pxToRem } from "../utils/helper-functions";

const CheckboxSection = () => {
	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	return (
		<Box sx={{ margin: `${pxToRem(24)} 0`, display: "flex" }}>
			<Checkbox {...label} />
			<Typography sx={{ fontSize: pxToRem(16) }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
				<a href="#" style={{ color: "#1E21FF", textDecoration: "underline" }}>
					do eiusmod
				</a>
			</Typography>
		</Box>
	);
};

export default CheckboxSection;
