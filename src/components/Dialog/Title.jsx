import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, Typography } from "@mui/material";

const Title = () => {
	return (
		<DialogTitle
			sx={{
				backgroundColor: "#262626",
				color: "#ffffff",
				"& .MuiTypography-DialogTitle-root": { padding: 0 },
				"& .MuiTypography-body1": {
					display: "flex !important",
					justifyContent: "space-between !important",
					paddingX: 2,
					paddingY: 1,
					fontWeight: 700,
				},
			}}
		>
			<Typography>
				Choose the form of payment
				<CloseIcon color="#fff" />
			</Typography>
		</DialogTitle>
	);
};

export default Title;
