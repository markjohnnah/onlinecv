import React from 'react';

import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { grommet } from 'grommet/themes';

export const ResponsiveHeader = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="https://github.com/markjohnnah"
        icon={<GrommetIcon color="brand" />}
        label="GitHub URL"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Github Account</Box>,
                    href: 'https://github.com/markjohnnah',
                  },
                  {
                    label: <Box pad="small">GitHub</Box>,
                    href: 'hhttps://github.com/markjohnnah',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://www.switchmaven.com/" label="Employer Site" />
              <Anchor
                href="https://github.com/markjohnnah"
                label="Linkden Account"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Grommet>
);

export default ResponsiveHeader