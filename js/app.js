(function(angular){

var app = angular.module("myApp", ['ngSanitize', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/", {
    templateUrl : "templates/inicio.html"
  })
  .when("/experiencia", {
    templateUrl : "templates/experiencia.html"
  })
  .when("/estudios", {
    templateUrl : "templates/estudios.html"
  })
  .when("/cursos", {
    templateUrl : "templates/cursos.html"
  })
  .when("/canales", {
  templateUrl : "templates/canales.html"
  })
  .when("/trabajos", {
    templateUrl : "templates/trabajos.html"
  })
  .when("/curriculum", {
    templateUrl : "templates/curriculum.html"
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
                this.imagePath = "images/" + this.imagen;
                 $scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
            }
            
        },
    templateUrl: 'templates/formacion.tpl.html'
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
            this.imagePath = "images/" + this.imagen;
        }
    }, 
    templateUrl: "templates/experiencia.tpl.html"
});

})(window.angular);


