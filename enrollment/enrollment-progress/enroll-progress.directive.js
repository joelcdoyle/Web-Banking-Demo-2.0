export default function enrollProgress() {
  'ngInject';
  return {
    controller: EnrollProgress,
    templateUrl: './enroll-progress.html',
    controllerAs: '$ctrl',
    scope: {
      steps: "="
    },
    bindToController: true
  }
}

class EnrollProgress {
  constructor($rootScope, $scope) {
    'ngInject';
    var $ctrl = this;

    $scope.$watch("$ctrl.steps", (steps) => {
      $ctrl.steps = steps;
    })

    $rootScope.$on("$stateChange")
  }

  progressPercentage() {
    if (!this.steps) {
      return 0;
    }
    let position = this.steps.findIndex((step) => {
      return step.active;
    });
    if (position < 0) {
      return 0;
    }
    let percentage = (position +1) / this.steps.length * 100;
    return percentage;
  }

  progressLabel() {
    if (!this.steps) {
      return "";
    }
    let position = this.steps.findIndex((step) => {
      return step.active;
    })
    return (position + 1) + " of " + this.steps.length;
  }
}