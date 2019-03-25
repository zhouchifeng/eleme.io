$('.shophd p:nth-child(n+3)').hide()
$('.hdpull').click(function(){
    $(this).parent().children("p:nth-child(n+3)").toggle("slow")
})


// 订单
$('.checkmore').click(function(){
    $(this).hide()
    $('.dindanlist').css("display","flex")
})