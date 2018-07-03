
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js'; 
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  console.log('ggggg', this.state);
  render(<App/>, document.getElementById('render-target'));
});
