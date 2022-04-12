import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({currency, handleChange}) {

    return (
        <Box sx={{ maxWidth: 500 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency}
                    label="Currency"
                    onChange={handleChange}
                >
                    <MenuItem value={'UAH'}>UAH</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'EURO'}>EURO</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}