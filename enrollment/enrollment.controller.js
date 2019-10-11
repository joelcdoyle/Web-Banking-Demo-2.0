class EnrollmentCtrl {
  constructor($scope, $uibModal, $state, enrollmentSteps) {
    'ngInject';
    var $ctrl = this;
    this.$state = $state;
    $ctrl.steps = enrollmentSteps;

    $ctrl.steps[0].active = true;
    $state.go("enroll.steps.membership");

    $scope.$on("advance-enrollment", (event, state) => {
      console.log(state)
      this.advanceEnrollment(state);
    });

    // $uibModal.open({
    //   template: "<h1>Hello</h1>"
    // });
  }

  advanceEnrollment(state) {
    this.steps.forEach((step) => {
      step.active = false;
    })

    this.steps.forEach((step) => {
      if (step.state == state) {
        step.active = true;
      }
    });

    this.$state.go("enroll.steps." + state);
  }

  hasMoreSteps() {
    return this.activeIndex < this.steps.length - 1;
  }
}

export default EnrollmentCtrl;