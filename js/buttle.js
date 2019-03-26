$(function () {
    var boxDom = $(".container");
    var top, right;
    var pageWidth = parseInt(boxDom.width()) / 10;
    var pageHeight = parseInt(boxDom.height()) / 10;
    var text = ["华哥你看的到吗", "我觉得你应该看的到", "你真的看得到嘛", "可能你看得到", "也可能你看不到", "就当你能看到吧", "你终于看到了", "看到了啥", "又没看到？", "楼上兄弟66666", "楼上的楼上66666"
        
    ]
    setInterval(() => {
        $.each(text, function (i, str) {
            setTimeout(() => {
                auto(str);
            }, i * 100);
        })
    }, text.length*100);

    function auto(str) {
        //生成一个元素
        var createSpan = $("<span class ='string'></span>");
        //给元素赋值
        createSpan.text(str);
        //生成元素一个随机的位置 为了使每一条弹幕都出现不同的位置
        top = Math.floor(Math.random() * pageHeight);
        createSpan.css({
            "top": top - 1 + "rem",
            "right": -10 + "rem",
            "color": getRandomColor()
        });
        boxDom.append(createSpan);
        //元素在dom运动起来
        //首先有一个span，只让最后一个动起来
        var spandom = $(".container>span:last-child"); //找到最后一个span
        spandom.animate({
            "right": pageWidth + 20 + "rem",
        }, 6000, function () {
            $(this).remove();
        });
    }
    //定义一个可以生成随机颜色的方法
    function getRandomColor() {
        var colorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        var color = "";
        for (var i = 0; i < 6; i++) {
            color += colorArr[Math.floor(Math.random() * 16)];
        }
        return "#" + color;
    }
})