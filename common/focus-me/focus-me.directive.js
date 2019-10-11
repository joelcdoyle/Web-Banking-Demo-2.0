export default function FocusMe($parse, $timeout) {
  'ngInject';
  return {
    link: function(scope, elem, attrs) {
      var model = $parse(attrs.focusMe);
      scope.$watch(model, function(value) {
        console.log("FocusMe: ", value);
        if (value == true) {
          $timeout(function() {
            elem.find('input')[0].focus();
          })
        }
      });
      elem.bind('blur', function() {
        scope.$apply(model.assign(scope, false))
      })
    }
  }
}