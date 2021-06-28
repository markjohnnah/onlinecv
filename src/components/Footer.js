
import React from "react";

import { Footer, Text, Anchor } from "grommet";
//import { Home, Favorite, ShareOption } from 'grommet-icons';

const AppFooter = () => {
  return (
    <div style={{ marginTop: '360px'}}>
      <Footer background="brand" pad="small">
        <Text>Copyright</Text>
        <Anchor label="About" />
      </Footer>
    </div>
  );
};

export default AppFooter;
