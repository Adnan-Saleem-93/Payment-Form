import { Avatar, Button, CardHeader } from "@mui/material";
import { pxToRem } from "../utils/helper-functions";

const ProfileInfo = () => {
	return (
		<CardHeader
			sx={{
				margin: `${pxToRem(24)} 0`,
				paddingX: 2,
				border: "1px solid #D3DEE9",
				borderRadius: pxToRem(20),
				bgcolor: "#F7FAFC",
				"& .MuiCardHeader-content .MuiCardHeader-title": {
					fontSize: pxToRem(26),
					fontWeight: 600,
				},
				"& .MuiCardHeader-action": {
					alignSelf: "center",
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
				<Button
					variant="contained"
					sx={{
						boxShadow: "none",
						borderRadius: pxToRem(10),
						bgcolor: "#EDF2F7",
						color: "#262626",
						padding: 1,
						marginRight: pxToRem(35),
						fontWeight: 600,
						textTransform: "capitalize",
					}}
					size="small"
				>
					Log Out
				</Button>
			}
			title="John"
			subheader="(88) 99602-2404"
		/>
	);
};

export default ProfileInfo;
