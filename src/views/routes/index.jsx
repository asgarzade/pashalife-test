import { Switch, Route } from "react-router-dom";
import Dashboard from 'views/routes/Dashboard';
import StaffMember from 'views/routes/StaffMember';

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={Dashboard} />
            <Route path={'/tasks'} component={Dashboard} />
            <Route path={'/email'} component={Dashboard} />
            <Route path={'/contacts'} component={Dashboard} />
            <Route path={'/chat'} component={Dashboard} />
            <Route path={'/deals'} component={Dashboard} />
            <Route path={'/settings'} component={Dashboard} />
            <Route path={'/staff/:id'} component={StaffMember} />
        </Switch>
    );
};

export default Routes;