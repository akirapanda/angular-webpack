// other imports omitted
import angular from 'angular';

import routing from './app.config';
import uirouter from 'angular-ui-router';
import app from './app.module';




import '../semantic/dist/semantic.css';
import '../semantic/dist/semantic.js';


angular.module('app')
  .config(routing)
  .name;