import { Switch, Route } from 'react-router-dom';
import { MainGallery, MyBestGallery } from '..';
import MenuContainer from './MenuContainer';

const AppContainer = () => (
    <Switch>
        <Route exact path="/">
        <MenuContainer />
        </Route>
        <Route path="/gallery">
            <MainGallery />
        </Route>
        <Route path="/my-best-9">
            <MyBestGallery />
        </Route>
    </Switch>
);
export default AppContainer;