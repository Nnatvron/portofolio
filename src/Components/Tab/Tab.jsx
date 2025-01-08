export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const backgroundColor = '#f5f5f5'; // Samakan dengan background Project

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor, // Background root container
      }}
    >
      <AppBar
        position="static"
        sx={{
          width: '100%',
          backgroundColor, // Samakan dengan background Project
          boxShadow: 'none',
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
            backgroundColor, // Samakan dengan background Project
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
          flexGrow: 1,
          width: '100%',
          height: 'calc(100% - 48px)',
          overflow: 'hidden',
        }}
      >
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              backgroundColor, // Samakan dengan background Project
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
              height: '100%',
              backgroundColor, // Samakan dengan background Project
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
              height: '100%',
              backgroundColor, // Samakan dengan background Project
            }}
          >
            Skills Content
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
