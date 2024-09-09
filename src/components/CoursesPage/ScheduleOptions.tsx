import { FC, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ISchedule } from "../../types/schedule.ts";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";


interface IProps {
  scheduleOptions: ISchedule[];
  handleCreateScheduleOptions: () => void;
  selectedOption: number,
  setSelectedOption: (index: number) => void;
  clearOptions: () => void;
  selectedCoursesCount: number;
}


const ScheduleOptions: FC<IProps> = (props) => {
  const { scheduleOptions, handleCreateScheduleOptions, selectedOption, setSelectedOption, selectedCoursesCount, clearOptions } = props;
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    if (selectedCoursesCount === 0) {
      clearOptions();
    }
  }, [selectedCoursesCount, clearOptions]);

  const _handleCreateScheduleOptions = async () => {
    setLoading(true);
    handleCreateScheduleOptions();
    setLoading(false);
  }

  const handleOptionChange = (event: SelectChangeEvent) => {
    const option = Number(event.target.value)
    setSelectedOption(option);
  }

  return (
    <Box sx={{ border: '1px solid #58A6FF', borderRadius: '8px', padding: '10px', marginTop: '20px' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={_handleCreateScheduleOptions}
        disabled={loading || selectedCoursesCount === 0}
        sx={{ marginTop: "10px" }}
      >
        {loading ? "Creating..." : "Create Schedule Options"}
      </Button>
      <Typography variant="h6" sx={{ color: '#C9D1D9', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
        Select a schedule option:
      </Typography>
      {scheduleOptions.length > 0 ? (
        <Select 
        value={selectedOption.toString()} 
        onChange={handleOptionChange}
        sx={{ 
          color: '#C9D1D9', 
          '& .MuiSelect-icon': { color: '#C9D1D9' },
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#58A6FF' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#58A6FF' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#58A6FF' },
        }}
      >
        {scheduleOptions.map((_, idx) => (
          <MenuItem key={idx} value={idx}>{idx + 1}</MenuItem>
        ))}
      </Select>
      ) : (
        <Typography sx={{ color: '#C9D1D9', textAlign: 'center' }}>
          sorry..no options found
        </Typography>
      )}
    </Box>
  );
};

export default ScheduleOptions;
