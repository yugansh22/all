           $(document).ready(function(){
                $("#home").click(function(){
                    $(".show").show();
                });
            });
            function back() {
                var x = document.getElementsByClassName("show");
                
                x.remove();

            }

            $(document).ready(function(){
                $("#home").click(function(){
                    $(".show").hide();
                });
            });
            