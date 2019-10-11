import ssnInput from './ssn-input.directive';

import './ssn-input.scss';

let ssnInputModule = angular.module('common.ssn-input', []);
ssnInputModule.directive('ssnInput', ssnInput);