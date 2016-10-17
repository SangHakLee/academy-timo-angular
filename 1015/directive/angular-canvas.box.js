angular.module('canvas-box', []).directive('canvasBox', [function(){
    /*
     E : 요소
     A : 속성
     C : 클래스
     M : 코멘트

     */
    return {
        restrict : 'E',
        template : '<div class="box"><canvas></canvas></div>',
        replace  : true, // 웹 표준 태그로 사용
        scope    : '@', // 요소의 스코프 사용
//            compile  : function(scope, element) { // 요소가 만들어질 때
//
//            }
        link     : function(scope, element, attr) { // DOM에 연결될
            var data = scope.data;
            element.css({
                left : data.x+'px',
                top  : data.y+'px',
                width : data.width+'px',
                height : data.heigth+'px'

            });

        }

    };
}]);