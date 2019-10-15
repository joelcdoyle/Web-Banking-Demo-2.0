export default function ssnInput() {
  "ngInject";
  return {
    controller: SsnInputCtrl,
    templateUrl: "./ssn-input.html",
    controllerAs: "$ctrl",
    require: ["^form"],
    scope: {
      name: "@",
      model: "=",
      label: "=",
      onEnter: "&"
    },
    bindToController: true,
    link: function(scope, elem, attrs, form) {
      scope.$ctrl.form = form[0];

      let ngModel = elem.find("input").controller("ngModel");

      ngModel.$parsers.push(value => {
        let numbers = value
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,2})(\d{0,4})/);
        ngModel.$setViewValue(
          !numbers[2]
            ? numbers[1]
            : numbers[1] +
                "-" +
                numbers[2] +
                (numbers[3] ? "-" + numbers[3] : "")
        );
        ngModel.$render();
      });
    }
  };
}

class SsnInputCtrl {
  constructor() {
    "ngInject";
    var $ctrl = this;
  }
  showSuccess() {
    return this.form[this.name].$valid;
  }
  enterPressed() {
    this.onEnter();
  }
}
