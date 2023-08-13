import React, { useState, Fragment } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  {
    label: 'Trang chu',
    path: '/'
  },
  {
    label: 'Gio hang',
    path: '/cart'
  },
  {
    label: 'User',
    path: '/login'
  }
];

const DrawerCompt = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const initialTab = tabs.findIndex(tab => tab.path === location.pathname);
  const [activeTab, setActiveTab] = useState(initialTab !== -1 ? initialTab : 0);

  const handleTabClick = (index) => {
    setOpenDrawer(false);
    setActiveTab(index);
    
  };

  return (
    <Fragment>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ flexDirection: 'column' }}>
          {tabs.map((tab, index) => (
            <ListItemButton key={index} onClick={() => handleTabClick(index)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to={tab.path}>{tab.label}</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <ReorderIcon />
      </IconButton>
    </Fragment>
  );
};

export default DrawerCompt;
