import emailInput from './email-input.directive';

import './email-input.scss';

let emailInputModule = angular.module('common.email-input', []);
emailInputModule.directive('emailInput', emailInput);