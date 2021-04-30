import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './styles.scss';
import Tab1 from "../Tab1";
import Tab2 from "../Tab2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "flex-start",
    height: "auto",
  },
}));

export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`${classes.root} custom-tabs`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="THÔNG TIN CÁ NHÂN" {...a11yProps(0)} className="custom-tabs__tab"/>
        <Tab label="MẬT KHẨU" {...a11yProps(1)} className="custom-tabs__tab" />
        <Tab label="CÀI ĐẶT TÀI KHOẢN" {...a11yProps(2)} className="custom-tabs__tab"/>
        <Tab label="TRỌ ĐÃ ĐĂNG" {...a11yProps(3)} className="custom-tabs__tab"/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        TÍNH NĂNG ĐANG PHÁT TRIỂN
      </TabPanel>
      <TabPanel value={value} index={3}>
        TÍNH NĂNG ĐANG PHÁT TRIỂN
      </TabPanel>
    </div>
  );
}
