/**
 * Created by user on 2016-06-11.
 */
angular.module("phonebook.controller",[])
    .controller("listCtrl",["$scope","$rootScope","Phone",
        function($scope,$rootScope,Phone){
            $rootScope.loader = true;

            Phone.query(function(data){
                $scope.phones = data;
                $rootScope.loader = false;
            });

        }])
    .controller("detailCtrl",["$scope","$rootScope","Phone","$state","$stateParams",
    function($scope,$rootScope,Phone,$state,$stateParams){
       // alert($stateParams.id);

        $scope.deletePhone = function(phone) {
            $rootScope.loader= true;
            phone.$delete(function() {
                //$location.path() 였다면 state는 go()로
                $state.go("list");
            });
        }//deletePhone() end

        $rootScope.loader= true;

        //한개의 전화번호를 얻어옵니다.
        Phone.get({id:$stateParams.id},function(data){

            $rootScope.loader= false;
            //alert(data.name);

            $scope.phone = data;

        });


    }])
    .controller("registerCtrl",["$scope","$rootScope","Phone","$state",
    function($scope,$rootScope,Phone,$state){
        //하나의 View를 입력,수정에 같이 사용
        $scope.type="입력";

        $scope.executePhone = function($event,phone) {
            $event.preventDefault();

            $rootScope.loader = true;
            //console.log(phone);//일반 자바스크립트객체
            phone = new Phone(phone);//$resource객체

            phone.$save(function() {
                $rootScope.loader = false;
                $state.go("list");
            });

            //console.log(phone);//$resource객체

        }//executePhone() end

        $scope.cancelRegister = function() {
            // alert("눌렀군요!");
            //list라는 state로 이동
            $state.go("list");
        }//cancelRegister() end

        //$scope는 View와 Controller연결해주는 Model
        //$rootScope는 angular전체에서 사용하는 scope
        //Phone은 $resource
        //$state는 ui-router에서 상태를 변경




    }]).controller("updateCtrl",["$scope","$rootScope","Phone","$state","$stateParams",
    function($scope,$rootScope,Phone,$state,$stateParams){
        //하나의 View를 입력,수정에 같이 사용
        $scope.type="수정";
		//alert("dho??");


		$rootScope.loader = true;

        $scope.executePhone = function($event,phone) {
            $event.preventDefault();

            $rootScope.loader = true;
            //console.log(phone);//일반 자바스크립트객체

            phone.$update(function(data) {
				//alert("수정완료");
                $rootScope.loader = false;
                $state.go("detail",{id:data._id.$oid});
            });

            //console.log(phone);//$resource객체


        }//executePhone() end

        Phone.get({id:$stateParams.id},function(data){

            //md-datepicker에 들어가는 모델은 반드시 Date형이어야 하기 때문에
            data.birth = new Date(data.birth);

            $scope.phone = data;

			$rootScope.loader = false;
        });

        $scope.cancelRegister = function() {
            // alert("눌렀군요!");
            //list라는 state로 이동
            $state.go("list");
        }//cancelRegister() end

        //$scope는 View와 Controller연결해주는 Model
        //$rootScope는 angular전체에서 사용하는 scope
        //Phone은 $resource
        //$state는 ui-router에서 상태를 변경

    }]);