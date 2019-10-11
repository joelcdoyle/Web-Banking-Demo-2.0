class EnrollMembershipCtrl {
  constructor(membershipStep, EnrollmentService, $transitions) {
    "ngInject";
    let $ctrl = this;
    this.EnrollmentService = EnrollmentService;
    $ctrl.step = membershipStep;
  }

  submitMembership(membership) {
    this.EnrollmentService.submitMembership(membership)
  }
}
export default EnrollMembershipCtrl