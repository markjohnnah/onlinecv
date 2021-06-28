
import { Grommet, Button, Card, CardBody, CardHeader, CardFooter  } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons';
import AppFooter from './components/Footer';
import ResponsiveHeader from './components/Header';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <div>
      <Grommet theme={theme}>
       <ResponsiveHeader />
        <Card height="small" width="xlarge" background="light-1" style={{marginLeft: '40px'}}>
          <CardHeader pad="medium">Welcome</CardHeader>
          <CardBody pad="medium">About Me</CardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button icon={<Favorite color="red" />} hoverIndicator />
            <Button icon={<ShareOption color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>

        <AppFooter />
      </Grommet>
    </div>
  );
}

export default App;
