
import { Grommet, Menu, Header, Button, Card, CardBody, CardHeader, CardFooter  } from 'grommet';
import { Home, Favorite, ShareOption } from 'grommet-icons';

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
        <header className="App-header">
          <Header background="brand">
            <Button icon={<Home />} hoverIndicator />
            <Menu label="account" items={[{ label: "logout" }]} />
          </Header>
        </header>
        <Card  height="small" width="large" background="light-1">
      <CardHeader pad="medium">Welcome</CardHeader>
      <CardBody pad="medium">About Me</CardBody>
      <CardFooter pad={{horizontal: "small"}} background="light-2">   
      <Button
      icon={<Favorite color="red" />}
      hoverIndicator
    />
    <Button icon={<ShareOption color="plain" />} hoverIndicator />
    </CardFooter>
</Card>
      </Grommet>
    </div>
  );
}

export default App;
