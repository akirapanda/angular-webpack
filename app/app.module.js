import angular from 'angular';
import uirouter from 'angular-ui-router';
import login from './login/login.module';

export default 
	angular.module('app', [
													uirouter,
													login
												])
	.name