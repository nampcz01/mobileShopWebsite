import React,{useState, Fragment} from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ReorderIcon from '@mui/icons-material/Reorder';

const pages = ["Trang chu", "Gio hang", "User", "Dang nhap"]
const DrawerCompt = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Fragment>
        <Drawer anchor="right" open={openDrawer} onClose={()=> setOpenDrawer(false)}>
            <List sx={{flexDirection:"column"}}>
                {
                    pages.map((page, index)=>(
                        <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                <ListItemText><a href='/'>{page}</a></ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
                
            </List>
        </Drawer>
        <IconButton sx={{color:"white", marginLeft:"auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
                <ReorderIcon/>
        </IconButton>
    </Fragment>
  )
}

export default DrawerCompt