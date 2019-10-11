export default function textInput() {
  'ngInject';
  return {
    controller: TextInputCtrl,
    templateUrl: './text-input.html',
    controllerAs: '$ctrl',
    require: ['^form'],
    scope: {
      name: "@",
      model: "=",
      label: "=",
      onEnter: "&"
    },
    bindToController: true,
    link: function(scope, elem, attr, form) {
      scope.$ctrl.form = form[0];
    }
  }
}

class TextInputCtrl {
  constructor() {
    'ngInject';
    var $ctrl = this;
  }
  showSuccess() {
    return this.form[this.name].$valid;
  }
  enterPressed() {
    this.onEnter();
  }
}