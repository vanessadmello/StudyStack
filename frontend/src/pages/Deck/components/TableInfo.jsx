import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function TableInfo({ props }) {
	return (
		<Paper sx={{ ml: 2, mr: 2 }}>
			<Table
				size="small"
				sx={{
					ml: "auto",
					mr: "auto",
					my: 2,
				}}
			>
				<TableBody>
					<TableRow>
						<TableCell>To Review</TableCell>
						<TableCell align="center">{props.toReview}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Reviewed</TableCell>
						<TableCell align="center">{props.reviewed}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Paper>
	);
}
