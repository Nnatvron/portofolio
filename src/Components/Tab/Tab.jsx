import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Service from './../Service/Service';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{
        height: '100%', // Pastikan TabPanel mengisi layar penuh
        display: value === index ? 'flex' : 'none',
        flexDirection: 'column',
      }}
    >
      {children}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: '100%', // Full width untuk AppBar
          backgroundColor: 'transparent', // Set background jadi transparan
          boxShadow: 'none', // Hapus shadow agar menyatu
          margin: 0,
          padding: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          centered
          aria-label="full width tabs example"
          sx={{
            margin: 0,
            padding: 0,
          }}
        >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Sertificate" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1, // Isi ruang tersisa
          width: '100%',
          height: 'calc(100% - 48px)', // Pastikan konten tepat di bawah tab (48px adalah tinggi tab)
          overflow: 'hidden', // Hilangkan scroll artefak
        }}
      >
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              height: '100%', // Full height untuk konten
              width: '100%', // Full width
            }}
          >
            <Service />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', // Full height
            }}
          >
            Sertificate Content
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', // Full height
            }}
          >
            Skills Content
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
