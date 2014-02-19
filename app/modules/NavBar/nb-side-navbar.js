ecoApp.directive('ecoSideNavbar', function () {
    return {
        restrict: 'E',
        replace:true,
        templateUrl:'./app/modules/NavBar/nb-side-navbar.html',
        controller:'nbSideNavBarCtrl',
        scope:{}
    }
});
