class IdentityStepCtrl {
  constructor(identityStep, EnrollmentService, $sce) {
    this.EnrollmentService = EnrollmentService;
    let $ctrl = this;
    this.$sce = $sce;
    $ctrl.membership = EnrollmentService.membership;

    this.step = identityStep;
    this.parts = identityStep.parts;
    this.partModels = {};

    this.partIndex = 0;

    this.currentPart = this.parts[this.partIndex];

    this.parts.forEach(part => {
      this.partModels[part.key] = part.defaultValue;
    });

    //console.log($ctrl.parts);
  }

  submitIdentity() {
    this.EnrollmentService.submitIdentity(this.identity);
  }

  nextPart() {
    if (this.identityForm.$valid && this.partIndex == this.parts.length - 1) {
      this.EnrollmentService.submitIdentity(membership);
      return;
    }

    if (this.identityForm[this.currentPart.key].$valid) {
      this.partIndex++;
      this.currentPart = this.parts[this.partIndex];
      this.identityForm.$setPristine();
    }
  }

  canNext() {
    if (this.partIndex == null || this.parts == null) {
      return false;
    }

    return this.partIndex < this.parts.length;
  }
}
export default IdentityStepCtrl;
