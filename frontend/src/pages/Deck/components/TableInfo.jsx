import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function TableInfo({ props }) {
	return (
		<Table
			size="small"
			sx={{
				ml:
					window.innerWidth > 850
						? 6
						: 3,
				my: 3,
			}}
		>
			<TableBody>
				<TableRow>
					<TableCell>To Review</TableCell>
					<TableCell align="right">{props.toReview}</TableCell>
				</TableRow>
			</TableBody>
			<TableBody>
				<TableRow>
					<TableCell>Reviewed</TableCell>
					<TableCell align="right">{props.reviewed}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
