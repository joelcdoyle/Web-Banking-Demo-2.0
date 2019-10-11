export default function progressBar() {
  'ngInject';
  return {
    controller: ProgressBar,
    templateUrl: './progress-bar.html',
    controllerAs: '$ctrl',
    scope: {
      percentage: "="
    }
  }
}

class ProgressBar {
  constructor() {
    'ngInject';
    var $ctrl = this;
  }
}