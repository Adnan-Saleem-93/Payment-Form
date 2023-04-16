import { Button, DialogActions } from "@mui/material";
import React from "react";

const Actions = () => {
	return (
		<DialogActions
			sx={{
				display: { flex: true, justifyContent: "space-between" },
				marginX: 4,
				marginY: 3,
			}}
		>
			<Button sx={{ color: "#262626", textTransform: "capitalize" }}>
				Previous
			</Button>
			<Button
				variant="contained"
				type="submit"
				sx={{
					boxShadow: "none",
					bgcolor: "#1E21FF",
					textTransform: "capitalize",
					paddingX: 5,
					paddingY: 2,
					borderRadius: "12px",
				}}
			>
				Next
			</Button>
		</DialogActions>
	);
};

export default Actions;
