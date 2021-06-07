import { Switch, Route } from 'react-router-dom';
import { MainGallery, MyBestGallery, MenuContainer } from '..';

const AppBase = () => (
    <Switch>
        <Route exact path="/">
            <MenuContainer />
        </Route>
        <Route exact path="/gallery">
            <MainGallery />
        </Route>
        <Route exact path="/my-best-9">
            <MyBestGallery />
        </Route>
    </Switch>
);
export default AppBase;