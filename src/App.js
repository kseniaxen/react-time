import {Route, BrowserRouter, Switch, Redirect, Link} from "react-router-dom"
import CurrentTime from "./components/CurrentTime"
import Timer from "./components/Timer"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
      <div>
        <ul>
          <li><Link to="/currenttime">Current Time</Link></li>
          <li><Link to="/timer">Timer</Link></li>
        </ul>
      </div>
    </nav>
        <Switch>
          <Route path="/currenttime" component={CurrentTime} />
          <Route path="/timer" component={Timer} />
          <Redirect from="/" to="/currenttime"/>
          <Route children={()=><h2>Error 404: Page Not Found</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}