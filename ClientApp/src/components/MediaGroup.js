import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import { useField } from "formik";

export default function MediaGroup({name}) {
    const [field, meta, helpers] = useField(name);
  
    const handleChange = (event) => {
      helpers.setValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 240 }}>
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'red',
            }}
          >
            <Typography
              id="example-payment-channel-label"
              level="title-md"
              textColor={'text.secondary'}
              fontWeight="xl"
              sx={{color:'white',alignItems:'center',justifyContent:'center'}}
            >
              Select media Type
            </Typography>
          </Box>
          <RadioGroup
            aria-labelledby="example-payment-channel-label"
            name={name}
            value={field.value}
            onChange={handleChange}
          >
            <List
              component="div"
              variant="outlined"
              orientation="vertical"
              sx={{
                borderRadius: 'sm',
                boxShadow: 'sm',
              }}
            >
              {['Movie', 'Tv-series', 'Both'].map((value, index) => (
                <React.Fragment key={value}>
                  {index !== 0 && <ListDivider />}
                  <ListItem>
                    <Radio id={value} value={value} label={value} sx={{color:'white'}} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </RadioGroup>
        </Box>
      );
}
