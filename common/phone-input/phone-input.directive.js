export default function phoneInput() {
  'ngInject';
  return {
    controller: PhoneInputCtrl,
    templateUrl: './phone-input.html',
    controllerAs: "$ctrl",
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "="
    },
    bindToController: true,
    link: function(scope, elem, attrs, ) {
      let ngModel = elem.find('input').controller('ngModel');

      ngModel.$parsers.push((value) => {
        let numbers = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        let phone = !numbers[2] ? numbers[1] : '(' + numbers[1] + ') ' + numbers[2] + (numbers[3] ? '-' + numbers[3] : '');
        ngModel.$setViewValue(phone);
        ngModel.$render();
        return phone;
      })
    }
  }
}

class PhoneInputCtrl {
  constructor() {
    'ngInject';
  }
}