
angular.module("canvas-box",[]).directive("canvasBox",["$document",function($document){
    //이름이 canvasBox면 사용시 canvas-box
    return {
        restrict:"E",//종류
        template:"<div class='box'><canvas></canvas></div>",
        replace:true,//요소 대치여부
        scope:"@",//요소의 스코프를 그대로 이용
        //compile:function(scope,element) {
        //  alert("test");
        //},//compile <== 요소가 만들어질때
        link:function($scope,$element,attr) {

            //이게 data
            var data = $scope.data;

            $element.css({
                left:data.x+"px",
                top:data.y+"px",
                width:data.width+"px",
                height:data.height+"px"
            });

            var canvas = $element.find("canvas")[0];

            canvas.width = data.width;
            canvas.height = data.height;

            var ctx = canvas.getContext("2d");//붓

            ctx.fillStyle = data.color;
            ctx.fillRect(data.cX,data.cY,data.cWidth,data.cHeight);


            var startX =0;//움직임 시작좌표
            var startY = 0;//움직임 끝좌표

            var x = data.x;//옮길 좌표
            var y = data.y;//옮길 좌표

            $element.on("mousedown",function(event) {
                startX = event.pageX -x;
                startY = event.pageY -y;
                //console.log(startX);
                console.log(startY);

                //이제 마우스무브이벤트를 document에
                $document.on("mousemove",function(e){

                    x = e.pageX - startX;
                    y = e.pageY - startY;

                    $element.css({left:x+"px",top:y+"px"});
                    $element.addClass("move");
                });//mousemove event end

                //마우스를 뗐을때 이벤트를 떼야 하기 때문에
                $document.on("mouseup",function() {
                    $document.off("mousemove");
                    $document.off("mouseup");
                    $element.removeClass("move");
                });//mouseup event end

            });//element mousedown end



            //$scope는 $scope
            //$element는 요소(jquery)
            //attr은 요소의 속성에 접근



        }//link <=== 요소가 만들어지고 DOM에 연결될때
    };
}]);

