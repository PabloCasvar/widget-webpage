(function(angular){

var app = angular.module("myApp", ['ngSanitize', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/", {
    templateUrl : "resources/templates/inicio.html"
  })
  .when("/experiencia", {
    templateUrl : "resources/templates/experiencia.html"
  })
  .when("/estudios", {
    templateUrl : "resources/templates/estudios.html"
  })
  .when("/cursos", {
    templateUrl : "resources/templates/cursos.html"
  })
  .when("/canales", {
  templateUrl : "resources/templates/canales.html"
  })
  .when("/trabajos", {
    templateUrl : "resources/templates/trabajos.html"
  })
  .when("/curriculum", {
    templateUrl : "resources/templates/curriculum.html"
  });
});

app.component('formacionItem', {
    bindings:{
        institucion: "@",
        escuela: "@",
        titulo: "@",
        trabajo: "@",
        periodo: "@",
        imagen: "@", 
        pull: "@"
    },
    controllerAs: 'ctrl',
        controller: function($scope){
            this.$onInit = function(){
                this.imagePath = "resources/images/" + this.imagen;
                 $scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
            }
            
        },
    templateUrl: 'resources/templates/formacion.tpl.html'
    }
);

app.component('experienciaItem',{
    bindings:{
        empresa: "@",
        puesto: "@",
        actividades: "@",
        link: "@",
        tipo: "@",
        periodo: "@",
        imagen: "@", 
        pull: "@"
    },
    controllerAs: 'ctrl',
    controller: function($scope){
        this.$onInit = function(){
            this.imagePath = "resources/images/" + this.imagen;
        }
    }, 
    templateUrl: "resources/templates/experiencia.tpl.html"
});

})(window.angular);


