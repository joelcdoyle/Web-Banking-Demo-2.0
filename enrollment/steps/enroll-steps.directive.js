export default function enrollmentSteps() {
  'ngInject';
  return {
    controller: EnrollmentSteps,
    templateUrl: './enroll-steps.html',
    controllerAs: '$ctrl',
    scope: {
      steps: "="
    },
    bindToController: true
  }
}

class EnrollmentSteps {
  constructor($scope) {
    'ngInject';
    var $ctrl = this;

  }
}