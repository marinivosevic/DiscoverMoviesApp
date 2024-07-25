import React from "react";
import { useFormikContext } from "formik";
import Box from '@mui/material/Box';
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
  }


 const FormikSlider = ({ nameBelow, nameAbove,min,max }) => {
  
  const { values, setFieldValue } = useFormikContext();
 
  const [value, setValue] = React.useState([values[nameBelow], values[nameAbove]]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    setFieldValue(nameBelow, newValue[0]);
    setFieldValue(nameAbove, newValue[1]);
  };

  return (
    <Box sx={{ width: 300, }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min} // Assuming 0 as the minimum value
        max={max} // Assuming 120 as the maximum value
        sx={{color:'#26a8c4'}}
      />
    </Box>
  );
  };

  export default FormikSlider;