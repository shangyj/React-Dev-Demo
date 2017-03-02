import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import PowerSetting from 'material-ui/svg-icons/action/power-settings-new';

const MenuExampleIcons = ({ resources }) => (
  <Paper className="app-navmenu">
      <List >
          {resources
              .filter(r => r.list)
              .map(resource =>
                  <ListItem
                      key={resource.name}
                      containerElement={<Link to={`/${resource.name}`} />}
                      primaryText={resource.label}
                      leftIcon={<resource.icon />}
                  />
              )
          }
      </List>
      <List>
        <ListItem
            key="logout"
            containerElement={<Link to="login"/>}
            primaryText="注销"
            leftIcon={<PowerSetting />}

        />
      </List>

  </Paper>
);

MenuExampleIcons.propTypes = {
    resources: PropTypes.array.isRequired,
};


export default MenuExampleIcons;
