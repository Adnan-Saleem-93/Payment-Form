import { DialogContent } from "@mui/material";
import React from "react";
import ProfileInfo from "../Profile-Info";
import SelectedService from "../Selected-Service";
import InputSection from "../InputSection";
import { pxToRem } from "../../utils/helper-functions";
import PaymentMethod from "../Payment-Method";
import CheckboxSection from "../Checkbox-Section";

const Content = ({ values, errors, control }) => {
	return (
		<DialogContent sx={{ padding: `${pxToRem(32)}`, maxHeight: `65vh` }}>
			<ProfileInfo />
			<SelectedService />
			<InputSection values={values} errors={errors} control={control} />
			<PaymentMethod />
			<CheckboxSection />
		</DialogContent>
	);
};

export default Content;
