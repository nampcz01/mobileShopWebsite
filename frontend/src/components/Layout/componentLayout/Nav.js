import React from 'react'
import {Fragment, useState} from "react"
import { AppBar, Tabs, Tab, Toolbar, Typography,Button, useMediaQuery, useTheme} from '@mui/material'
import DrawerCompt from './Header/DrawerMenu';
//icon
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SearchBar from './Header/search';
const Nav = () => {
    const pages = ["Trang chu", "Gio hang", "User"]

    const [moveTab, setMoveTab] = useState();
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Fragment>
        <AppBar sx={{background: "#063970"}} >
            <Toolbar>
                
                {
                    isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "2rem"}}>
                                VShop
                            </Typography>
                            <SearchBar/>

                            <DrawerCompt/>
                        </>
                    ) : (
                        <>
                            <StoreOutlinedIcon/>
                            <SearchBar/>
                            <Tabs sx={{marginLeft:"auto"}} textColor="inherit" 
                            value={moveTab} onChange={(e, moveTab)=>setMoveTab(moveTab)}
                            indicatorColor='primary' >
                                {
                                    pages.map((page,index)=>(
                                        <Tab key={index} label={page}/>
                                    ))
                                }
                                <Button sx={{marginLeft:"5px"}}  color="primary"
                                    disabled={false}
                                    size="medium"
                                    variant="outlined">
                                        <LoginOutlinedIcon/>
                                        Đăng nhập
                                </Button>
                            </Tabs>
                        </>
                    )
                }
            </Toolbar>
          
        </AppBar>
    </Fragment>
  )
}

export default Nav