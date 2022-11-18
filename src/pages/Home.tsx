import { Box, Tabs, Tab } from "@mui/material";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React from "react";

function LinkTab(props: any) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Home: React.FC = () => {

  // console.log(props.location);
  // console.log(props.match);
  // console.log(props.history);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="home">
      <Header></Header>
      <h1>HOME</h1>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Page One" href="/exercice" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default Home;