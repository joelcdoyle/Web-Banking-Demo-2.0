import angular from "angular";
import progressCircle from './progress-circle.directive';

import './progress-circle.scss';

let progressCircleModule = angular.module('progress-circle', [])
progressCircleModule.directive('progressCircle', progressCircle);