angular.module('formControllers',[])
  //create controller module called formsControllers, we don't have any dependencies to inject so [] indicates a blank array
  //each route has a controller as defined in the app.js  
  .controller('AboutController', function($scope) {
  //we always pass in the $scope object
    $scope.title = "About Apartment Brisas";
    $scope.maps = [{
        
      address: 'Brisas Del Mar, Av. Reina Sofia, Formentera del Segura, spain',
      zoom: 16,
      width: 1000      
      },
      {
      address: 'Guardamar del Segura beach, Guardamar del Segura, Spain',
      zoom: 16,
      width: 1000      
      },
      {
      address: 'La Marina, Guardamar del Segura, Spain',
      zoom: 16,
      width: 1000      
      }];
    $scope.map = $scope.maps[0];
  //map location for the map custom directive
  })
 

  .controller('availabilityController', function($scope) {
      
    $scope.title = "Availability";
    $scope.maps = [{
        
      address: 'Brisas Del Mar, Av. Reina Sofia, Formentera del Segura, spain',
      zoom: 16,
      width: 1000      
      },
      {
      address: 'Guardamar del Segura beach, Guardamar del Segura, Spain',
      zoom: 16,
      width: 1000      
      },
      {
      address: 'La Marina, Guardamar del Segura, Spain',
      zoom: 16,
      width: 1000      
      }];
    $scope.map = $scope.maps[0];
       
      $scope.register = {};
      //sets submitted status to false
      $scope.submitted = false;
      //sets  uniqueusername and uniqueemail so form can validate on submit
      $scope.uniqueusername = true;
      $scope.uniqueemail = true;
      $scope.titles = ['Mr','Mrs','Miss','Ms', 'Dr', 'Sir'];
      //adds options to the select box in the form
      $scope.selectedTitle = $scope.title[1];
      $scope.adults = [1,2,3,4,5,6];
      $scope.selectedAdults = $scope.adults[1];
      $scope.children = [0,1,2,3,4,5,6];
      $scope.selectedChildren = $scope.children[1];
      $scope.date = new Date();
      
      $scope.registerForm = function(registerForm) {
        $scope.date = new Date();
        $scope.submitted = false;
        $scope.uniqueusername = true;
        $scope.uniqueemail = true;
          
          if (registerForm.$valid) {
          //continue with form processing
          $scope.submitted = false;
          //continue with form processing
          alert("Form Valid: " + $scope.register.fullname + " " +  $scope.register.email);
            //$scope.register = {}; //reset the form
            //return; // return from function
            //use a service to check for validity of username
            $scope.uniquefullname = true; 
            //use a service to check for validity of email
            $scope.uniqueemail = true;
              if ($scope.uniquefullname &&
                $scope.uniqueemail ) {
            }
          }
          else {
            console.log("form is invalid");
            $scope.submitted = true;
          }
        
    };
    })

    .controller('activitiesController', function($scope) {
    $scope.title = "Activities";

    $scope.maps = [{
        
        address: 'Brisas Del Mar, Av. Reina Sofia, Formentera del Segura, spain',
        zoom: 16,
        width: 1000      
        },
        {
        address: 'Guardamar del Segura beach, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        },
        {
        address: 'La Marina, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        }];
  $scope.map = $scope.maps[0];
  })

    .controller('pricesController', function($scope, MyService) {

    $scope.title = "Rental Rates";


    var URL = "http://arnold-j.net16.net/apartment-brisas/js/price.json";
    var URL = "js/price.json";
    //console.log(URL);

    $scope.prices = {};
 
        MyService.getPrice(URL).then(function(results) {
            $scope.prices = results.data;
            //console.log($scope.prices);
        }).catch(function(err) {
            console.log(err);
        });
    $scope.maps = [{
        
        address: 'Brisas Del Mar, Av. Reina Sofia, Formentera del Segura, spain',
        zoom: 16,
        width: 1000      
        },
        {
        address: 'Guardamar del Segura beach, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        },
        {
        address: 'La Marina, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        }];
  $scope.map = $scope.maps[0];
})

    .controller('weatherController', function($scope){
      $scope.title = "Weather";
    })

    .controller('galleryController', function($scope){
      $scope.title = "Gallery";
    })

    .controller('TestController', function($scope){
      $scope.title = "Test";
    })