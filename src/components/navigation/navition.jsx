import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';

const MenuExampleIcons = ({ resources }) => (
  <Paper>
      <List>
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
  </Paper>
);

MenuExampleIcons.propTypes = {
    resources: PropTypes.array.isRequired,
};


export default MenuExampleIcons;
