import { forwardRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProfileInfo from "./Profile-Info";
import { pxToRem } from "../utils/helper-functions";
import SelectedService from "./Selected-Service";
import InputSection from "./InputSection";
import PaymentMethod from "./Payment-Method";
import CheckboxSection from "./Checkbox-Section";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogComponent() {
	const [open, setOpen] = useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
				<DialogContent sx={{ padding: `${pxToRem(32)}` }}>
					<ProfileInfo />
					<SelectedService />
					<InputSection />
					<PaymentMethod />
					<CheckboxSection />
				</DialogContent>
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
			</Dialog>
		</>
	);
}
