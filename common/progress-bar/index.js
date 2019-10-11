import progressBar from './progress-bar.directive';
import './progress-bar.scss';

let progressBarModule = angular.module('progress-bar', [])
progressBarModule.directive('progressBar', progressBar);