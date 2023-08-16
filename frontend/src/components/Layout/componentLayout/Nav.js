import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerCompt from "./Header/DrawerMenu";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import SearchBar from "./Header/search";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/authSlice";

const Nav = () => {
  const tabs = [
    {
      label: "Trang chu",
      path: "/",
    },
    {
      label: "Gio hang",
      path: "/cart",
    },
    {
      label: "User",
      path: "/login",
    },
  ];

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const initialTab = tabs.findIndex((tab) => tab.path === location.pathname);
  const [moveTab, setMoveTab] = useState(initialTab !== -1 ? initialTab : 0);
  const dispatch = useDispatch()
  const { login } = useSelector((state) => state.auth);

  console.log(login.currentUser);
  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography sx={{ fontSize: "2rem" }}>VShop</Typography>
            <SearchBar />
            <DrawerCompt />
          </>
        ) : (
          <>
            <StoreOutlinedIcon />
            <SearchBar />
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={moveTab}
              onChange={(e, moveTab) => setMoveTab(moveTab)}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  component={Link}
                  to={tab.path}
                />
              ))}
            </Tabs>
            {login.currentUser?.name ? (
              <Button
                sx={{ marginLeft: "5px" }}
                color="primary"
                disabled={false}
                onClick={()=>dispatch(logout())}
                // size="medium"
                // variant="outlined"
                // href="/login"
              >
                <LoginOutlinedIcon />
                Đăng Xuất
              </Button>
            ) : (
              <Button
                sx={{ marginLeft: "5px" }}
                color="primary"
                disabled={false}
                size="medium"
                variant="outlined"
                href="/login"
              >
                <LoginOutlinedIcon />
                Đăng nhập
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
