import { Tab, Tabs } from "@mui/material";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function Navbar() {
    function useRouteMatch(patterns) {
      const { pathname } = useLocation();
    
      for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
          return possibleMatch;
        }
      }
    
      return null;
    }
    const routeMatch = useRouteMatch(['/', '/profile', '/projects'])
    const currentTab = routeMatch?.pattern?.path;
    return (
        <Tabs value={currentTab} centered>
            <Tab label="Home" value="/" to="/" component={Link} />
            <Tab label="Profile" value="/profile" to="/profile" component={Link} />
            <Tab label="Projects" value="/projects" to="/projects" component={Link} />
        </Tabs>
    )
}