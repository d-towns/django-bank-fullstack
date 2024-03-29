import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";


export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };
  
export const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };
  