$(document).ready(function() {
            var val = 1;
            $("#navToggle").click(function() {
                if (val == 1) {
                    $("header>nav>ul").css("display", "block");
                    val = 0;

                } else {
                    val = 1;
                    $("header>nav>ul").css("display", "none");
                }
                return false;
            });
            // submenu
            $('.nav__item.nav__item--sub>a').click(function() {
                $(this).parent().siblings().find('ul.children').slideUp(500);
                $(this).next('ul.children').slideToggle(500);
                $(this).parent().siblings().find('.toggle').text("Expand");
                if ($(this).children('.toggle').text() == "Expand") {
                    $(this).children('.toggle').text("Close");
                } else {
                    $(this).children('.toggle').text("Expand");
                }
            });
        });