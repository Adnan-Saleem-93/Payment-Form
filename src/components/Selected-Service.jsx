import { Avatar, Button, CardHeader, Typography } from "@mui/material";
import { pxToRem } from "../utils/helper-functions";

const SelectedService = () => {
	return (
		<>
			<Typography sx={{ fontSize: pxToRem(22), fontWeight: 600 }}>
				Selected Service
			</Typography>
			<CardHeader
				sx={{
					margin: `${pxToRem(16)} 0 ${pxToRem(24)} 0`,
					paddingX: 2,
					border: "1px solid #D3DEE9",
					borderRadius: pxToRem(20),
					"& .MuiCardHeader-content .MuiCardHeader-title": {
						fontSize: pxToRem(22),
						fontWeight: 600,
					},
				}}
				avatar={
					<Avatar
						sx={{ bgcolor: "#EDF2F7", color: "#262626" }}
						aria-label="recipe"
					>
						J
					</Avatar>
				}
				action={
					<Typography
						variant="contained"
						sx={{
							color: "#262626",
							padding: 1,
							marginRight: pxToRem(35),
							fontWeight: 700,
							textTransform: "capitalize",
						}}
						size="small"
					>
						Rp 1.350.000
					</Typography>
				}
				title="Japenese Lessons"
				subheader="Dec 2, 2020 · 11:00 · 1 month"
			/>
		</>
	);
};

export default SelectedService;
