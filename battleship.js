$(document).ready(function () {
    $(":checkbox").change(placePeg);

    function placePeg() {
        // p1Sub1 will be true if checkbox is checked
        var p1Sub1 = $("#p1-sub1").is(":checked");

        // create variables for player 1's sub 2 and sub 3
        var p1Sub2 = $("#p1-sub2").is(":checked");
        var p1Sub3 = $("#p1-sub3").is(":checked");
        // Test if player 1's submarine was sunk
        // If it was, then show the message:
        // $("#p1-sub-msg").show();
        if(p1Sub1 === true || p1Sub2 === true || p1Sub3 === true)
        {
            $("#p1-sub-msg").show("Your submarine was sunk");
        }

        // p1Bship1 will be true if checkbox is checked
        var p1bship1 = $("#p1-bship1").is(":checked");

        // create variables for player 1's battleship 2, 3, and 4
        var p1bship2 = $("#p1-bship2").is(":checked");
        var p1bship3 = $("#p1-bship3").is(":checked");
        var p1bship4 = $("#p1-bship4").is(":checked");

        // Test if player 1's battleship was sunk
        // If it was, then show the message:
        // $("#p1-bship-msg").show();
        if(p1bship1 === true || p1bship2 === true || p1bship3 === true || p1bship4 === true)
        {
            $("#p1-bship-msg").show("Your battleship was sunk");
        }

        // p2Sub1 will be true if checkbox is checked
        var p2Sub1 = $("#p2-sub1").is(":checked");

        // create variables for player 2's sub 2 and sub 3
        var p2Sub2 = $("#p2-sub2").is(":checked");
        var p2Sub3 = $("#p2-sub3").is(":checked");
        // Test if player 2's submarine was sunk
        // If it was, then show the message:
        // $("#p2-sub-msg").show();
        if(p2Sub1 === true || p2Sub2 === true || p2Sub3 === true)
        {
            $("#p2-sub-msg").show("Your submarine was sunk");
        }

        // p2Bship1 will be true if checkbox is checked
        var p2bship1 = $("#p2-bship1").is(":checked");

        // create variables for player 2's battleship 2, 3, and 4
        var p2bship2 = $("#p2-bship2").is(":checked");
        var p2bship3 = $("#p2-bship3").is(":checked");
        var p2bship4 = $("#p2-bship4").is(":checked");
        // Test if player 2's battleship was sunk
        // If it was, then show the message:
        // $("#p2-bship-msg").show();
        if(p2bship1 === true || p2bship2 === true || p2bship3 === true || p2bship4 === true)
        {
            $("#p2-bship-msg").show("Your battleship was sunk");
        }

        // If both of player 1's ships were sunk
        // OR
        // both of player 2's ships were sunk
        // then:
        // $("#gameOverMsg").show();

        if(p1Sub1 === true && p1Sub2 === true && p1Sub3 === true && p1bship1 === true && p1bship2 === true && p1bship3 === true && p1bship4 === true)
        {
            $("#gameOverMsg").show("Game Over");
        }
        if(p2Sub1 === true && p2Sub2 === true && p2Sub3 === true && p2bship1 === true && p2bship2 === true && p2bship3 === true && p2bship4 === true)
        {
            $("#gameOverMsg").show("Game Over");
        }
    }

});