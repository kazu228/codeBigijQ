$(function() {
    $("p").css("color", "red").css("background-color", "yellow");

    // 確認問題
    $('.red').css('color', 'red');

    $('#blue').css('color', 'blue');

    let html = $('p').html();
    let text = $('p').text();
    alert(html);
    alert(text);

    $('.item01').html('<a href="">aタグを設定しています。</a>');
    $('.item02').text('<a href="">aタグを設定しています。</a>');
    
});