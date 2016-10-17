
var app = angular.module("phoneApp",
    ["ngMaterial","ui.router","phonebook.filter",
        "phonebook.controller","phonebook.service"]);

app.run(function($rootScope) {
    $rootScope.loader = false;//로딩이미지
});

app.config(function($stateProvider,$urlRouterProvider) {
    //ui-router예제(IONIC프레임워크에서는 기본 router로 사용)

    //state : 상태 안에 -> state 이런식으로 중첩
    //view를 여러개 사용가능(route에서는 include를 사용)

    $stateProvider.state("list",{
        url:"/list",
        views:{headerView:{
            templateUrl:"templates/header.html",
            controller:function($document) {
                $document[0].title="전화번호 목록";
            }
        },contentView:{
            templateUrl:"templates/list.html",
            controller:"listCtrl"
        },footerView:{
            templateUrl:"templates/footer.html"
        }}
    });

    $stateProvider.state("detail",{
        url:"/phone/:id",
        views:{
            headerView:{
                templateUrl:"templates/header.html",
                controller:function($document) {
                    $document[0].title="전화번호 상세페이지";
                }
            },
            contentView:{
                templateUrl:"templates/detail.html",
                controller:"detailCtrl"
            },
            footerView:{
                templateUrl:"templates/footer.html"
            }
        }
    })

    $stateProvider.state("search",{
        url:"/search",
        views:{
            headerView:{
                templateUrl:"templates/header.html",
                controller:function($document) {
                    $document[0].title="전화번호 검색";
                }
            },
            contentView:{
                templateUrl:"templates/search.html"
            },
            footerView:{
                templateUrl:"templates/footer.html"
            }
        }
    });

    $stateProvider.state("update",{
        url:"/update/:id",
        views:{
            headerView:{
                templateUrl:"templates/header.html",
                controller:function($document) {
                    $document[0].title="전화번호 수정";
                }
            },
            contentView:{
                templateUrl:"templates/form.html",//View는 register,update랑 공유
                controller:"updateCtrl"
            },
            footerView:{
                templateUrl:"templates/footer.html"
            }
        }
    });

    $stateProvider.state("register",{
        url:"/register",
        views:{
            headerView:{
                templateUrl:"templates/header.html",
                controller:function($document) {
                    $document[0].title="전화번호 등록";
                }
            },
            contentView:{
                templateUrl:"templates/form.html",
                controller:"registerCtrl"
            },
            footerView:{
                templateUrl:"templates/footer.html"
            }
        }
    });
    //$routeProvier.when(주소,옵션) -> $stateProvider.state(state이름,옵션객체)

    //$routeProvider.otherwise() -> $urlRouterProvider.otherwise()
    $urlRouterProvider.otherwise("/list");

    
});
