import { IconButton, Tooltip } from '@mui/material'
// import DeleteIcon from '@mui/icon-material/Delete'

export const BasicTooltip = () => {
	return (
		<Tooltip title="Delete">
			<IconButton>{/* <DeleteIcon /> */}</IconButton>
		</Tooltip>
	)
}
