(function(angular){

var app = angular.module("myApp", []);

app.component('formacionItem', {
    bindings:{
        institucion: "@",
        escuela: "@",
        titulo: "@",
        trabajo: "@",
        periodo: "@",
        imagen: "@"
    },
    controllerAs: 'gridCtrl',
        controller: function($scope){
            
        },
    templateUrl: 'templates/formacion.tpl.html'
    }
);

})(window.angular);


