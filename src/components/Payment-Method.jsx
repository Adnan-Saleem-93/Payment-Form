import { Box, Grid, Typography } from "@mui/material";
import { pxToRem } from "../utils/helper-functions";
import { useState } from "react";

const PaymentMethod = () => {
	const [paymentTypes, setPaymentTypes] = useState([
		{ id: "cash", text: "Cash", isSelected: true },
		{ id: "credit_card", text: "Credit Card", isSelected: false },
		{ id: "e_wallet", text: "eWallet/Virtual Bank", isSelected: false },
	]);
	const handleClick = (id) => {
		let itemsToUnSelect = paymentTypes.map((x) => {
			if (x.id === id) {
				x.isSelected = true;
			} else {
				x.isSelected = false;
			}
			return x;
		});

		setPaymentTypes(itemsToUnSelect);
	};
	return (
		<>
			<Typography
				sx={{
					fontSize: pxToRem(30),
					fontWeight: 600,
					marginBottom: `${pxToRem(24)}`,
				}}
			>
				Choose a way to pay
			</Typography>
			<Grid container spacing={0} justifyContent="space-between">
				{paymentTypes.map((type, index) => {
					const { id, text, isSelected } = type;
					return (
						<Grid
							item
							xs={12}
							sm={3.75}
							sx={{
								backgroundColor: `${isSelected ? "#fff" : "#EDF2F7"}`,
								borderRadius: pxToRem(12),
								padding: `${pxToRem(8)}`,
								border: `${isSelected ? "2px" : 0} solid #262626`,
								textAlign: "center",
								margin: 0.25,
								fontSize: pxToRem(14),
								fontWeight: `${isSelected ? 600 : 400}`,
								"&:hover": {
									cursor: "pointer",
								},
							}}
							onClick={() => handleClick(id)}
							key={index}
						>
							{text}
						</Grid>
					);
				})}
			</Grid>
		</>
	);
};

export default PaymentMethod;
