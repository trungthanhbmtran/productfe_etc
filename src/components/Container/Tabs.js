import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Grid } from '@mui/material';
import { InfoData } from '../../../data/InfoData';
import Card from './Card';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
           {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Tabs = () => {
  // const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const GroupNews = InfoData.find(e => e.id === value)

  console.log('GroupNews', GroupNews)
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <Box width="100%"  >
      <MuiTabs
        value={value}
        onChange={handleChange}
        // indicatorColor="secondary"
        // textColor="inherit"
        // aria-label="full width tabs example"
        variant="fullWidth"
      >
        <MuiTab label="Thành tựu đạt được" {...a11yProps(0)} />
        <MuiTab label="Hoạt động xã hội" {...a11yProps(1)} />
        <MuiTab label="Giấy tờ công bố" {...a11yProps(2)} />
      </MuiTabs>

      <TabPanel value={value} index={value}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {GroupNews.subcontent.map(e =>
            <Grid item key={e.subid}>
              <Card description={e.Description} PathImg={e.imagePath} time={e.time} />
            </Grid>
          )}
        </Grid>
      </TabPanel>

      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      Item Three
      </TabPanel> */}
    </Box>

  )
}

export default Tabs