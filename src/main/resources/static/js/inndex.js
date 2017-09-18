$(document).ready(function (e) {
    $(".subNav1").bind("click", function () {
        $(".navContent1").toggle();
    });
    $(".subNav2").bind("click", function () {
        $(".navContent2").toggle();
    });
    $(".subNav3").bind("click", function () {
        $(".navContent3").toggle();
    });
});
$(document).ready(function (e) {
    $(".li01").click(function () {
        $.ajax({
            url: "/list",
            type: "get",
            success: function (result) {
                console.log(result);
                $(".content").html(result);
            },
            error: function () {
                alert("链接超时");
            }
        });
    });
    $(".content").on("click", "#coustm", function () {
        $.ajax({
            url: "/add",
            type: "get",
            async: true,
            success: function (result) {
                console.log(result);
                $(".content").html(result);
            },
            error: function () {
                alert("链接超时");
            }
        });

    });
    $(".content").on("click", "#cofm", function () {
        var age = $("#ageId").val();
        var cupSize = $("#cupSizeId").val();
        $.ajax({
            url: "/addScuess",
            type: "post",
            async: true,
            data: {"age": age, "cupSize": cupSize},
            success: function (result, status) {
                alert(status);
                $(".content").html(result);
            },
            error: function () {
                alert("链接超时");
            }
        });
    });
    /* $(".content").on("click","#delBtn",function () {
          var girlId = $("#girlIdDel").val();
          $.ajax({
              url: "/delete/" + girlId,
              type: "get",
              dataType:"json",
              success: function (result) {
                  $(".content").html(result);

              },
              error: function (XMLHttpRequest,textStatus,errorThrown) {
                  alert(XMLHttpRequest.readyState);

              }
          });
      });*/
    $(".content").on("click", "#updateSuccess", function () {
        var girlId = $("#girlId").val();
        var age = $("#ageAtrr").val();
        var cupSize = $("#cupSizeAtrr").val();
        $.ajax({
            url: "/update",
            type: "get",
            async: true,
            data: {"id": girlId, "age": age, "cupSize": cupSize},
            success: function (result) {
                $(".content").html(result);
            }

        });
    });
});

function editGirl(girlId) {
    alert(girlId);
    $.ajax({
        url: "/edit/" + girlId,
        type: "get",
        success: function (result) {
            $(".content").html(result);
        }

    });
}

function deleteGirl(girlId) {
    alert(girlId);
    $.ajax({
        url: "/delete/" + girlId,
        type: "get",
        async: true,
        success: function (result) {
            console.log(result);
            $(".content").html(result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);

        }
    });
}

/*$(document).ready(function(e) {
    $(".li01").click(function(){
        htmlText= "<h1>test</h1> <table class='df'><th>发的低VDVD</th></table>";
       /!* <!---->htmlText=$.ajax({url:"",async:false});
        <!---->$(".content").html(htmlText.responseText);
        $(".content").html(htmlText);
    });
    $(".li02").click(function(){
      htmlText= "<h1>test</h1> <table class='df'><th>持续宣传橙V徐</th></table>";
        htmlText=$.ajax({url:"",async:false});
        $(".content").html(htmlText.responseText);
        $(".content").html(htmlText);
    });
});*/
$(document).ready(function (e) {
    $(".dfg ul li a").bind(
        {
            "mouseover": function () {
                var index = $(this).index();
                $(this).css("color", "red");
            },
            "mouseout": function () {
                var index = $(this).index();
                $(this).css("color", "black");

            }
        });


});
$(document).ready(function (e) {
    $(".subNav1").bind(
        {
            "mouseover": function () {
                var index = $(this).index();
                $(this).css("color", "#69F");
            },
            "mouseout": function () {
                var index = $(this).index();
                $(this).css("color", "#999");

            }
        });
});
$(document).ready(function (e) {
    $("li.mainlevel").bind(
        {
            "mousemove": function () {
                $(this).find('ul').slideDown();
            },
            "mouseleave": function () {
                $(this).find('ul').slideUp("fast");

            }
        });

});