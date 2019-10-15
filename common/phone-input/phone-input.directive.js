export default function phoneInput() {
  "ngInject";
  return {
    controller: PhoneInputCtrl,
    templateUrl: "./phone-input.html",
    controllerAs: "$ctrl",
    require: ["^form"],
    scope: {
      name: "@",
      model: "=",
      label: "=",
      onEnter: "&"
    },
    bindToController: true,
    link: function(scope, elem, attrs) {
      scope.$ctrl.form = form[0];
      let ngModel = elem.find("input").controller("ngModel");

      ngModel.$parsers.push(value => {
        let numbers = value
          .replace(/\D/g, "")
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        let phone = !numbers[2]
          ? numbers[1]
          : "(" +
            numbers[1] +
            ") " +
            numbers[2] +
            (numbers[3] ? "-" + numbers[3] : "");
        ngModel.$setViewValue(phone);
        ngModel.$render();
        return phone;
      });
    }
  };
}

class PhoneInputCtrl {
  constructor() {
    "ngInject";
  }
  showSuccess() {
    return this.form[this.name].$valid;
  }
  enterPressed() {
    this.onEnter();
  }
}
