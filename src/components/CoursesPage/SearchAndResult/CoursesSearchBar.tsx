import { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CoursesSearchBar: FC = () => {
    return (
        <Box sx={{ marginBottom: '20px' }}>
            <TextField
            variant="outlined"
            placeholder="חיפוש"
            size="small"
            fullWidth
            sx={{
                backgroundColor: '#0D1117',
                input: { color: '#C9D1D9', padding: '10px', textAlign: 'right' },
                fieldset: { borderColor: '#30363D' },
                borderRadius: '8px',
            }}
        />
    </Box>
    )
}

export default CoursesSearchBar;