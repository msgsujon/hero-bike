import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "./../../../Hook/useAuth";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddUsere from "../../AddUser/AddUser";
import MyBooking from "../../AllBooking/AllBooking";
import AllBooking from "../../MyBooking/MyBooking";
import ReviewsAdd from "../../Reviews/ReviewAdd/ReviewsAdd";
import Payment from "../../Payment/Payment";
import ManageOrder from "../../ManageOrder/ManageOrder";
import AddUser from "../../AddUser/AddUser";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { user, logout } = useAuth();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/home">
        <Button style={{ textDecoration: "none" }} color="inherit">
          Home
        </Button>
      </Link>
      <br />
      <Link to={`${url}/myorder`}>
        <Button color="inherit">My Order</Button>
      </Link>
      <br />
      <Link to={`${url}/payment`}>
        <Button color="inherit">payment</Button>
      </Link>
      <br />
      <Link to={`${url}/reviewAdd`}>
        <Button color="inherit">review</Button>
      </Link>
      <br /><br/>
      {admin && (
        <Box>
          <Link to={`${url}/addservice`}>
            <Button color="inherit">add product</Button>
          </Link>
          <Link to={`${url}/manageAllOrders`}>
            <Button color="inherit">Manage All Orders</Button>
          </Link>
          <Link to={`${url}/manage`}>
            <Button color="inherit">Manage Orders</Button>
          </Link>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
        </Box>
      )}
      <br /> <br />
      {user?.email ? (
        <button onClick={logout} type="button" className="btn btn-warning ">
          Logout
        </button>
      ) : (
        <Link to="/login" className="nav-link active" aria-current="page">
          Login
        </Link>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}/myorder`}>
            <MyBooking></MyBooking>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route exact path={`${path}/reviewAdd`}>
            <ReviewsAdd />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addservice`}>
            <AddUser></AddUser>
          </Route>

          <Route path={`${path}/manageAllOrders`}>
            <AllBooking></AllBooking>
          </Route>
          <Route path={`${path}/manage`}>
            <ManageOrder></ManageOrder>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
