//Assignment 3
//Aauthor: Prafulla Garasia
//Student_Id: 0797964
//Date: 10-10-2022


//method 1

/* $(document).ready(function () 
{
   
    let getJSONObject = $.getJSON("team.json", function (data) 
    {
        console.log("data from my getJSON method", data);
        
        let temp= '';
        $.each(data.team, function (key, val) 
        {
           temp += '<h2>' + val.name + '</h2>';
           temp += '<h5>' + val.position + '</h5>';
           temp += '<p>' + val.bio + '</p>';
            
        });
        $(`#team`).html(temp);
    }
}); */

//method 2

$(document).ready(function () 
{
    setTimeout(loadJson, 5000);  // MAKE THE AJAX CALL AFTER A FEW SECONDS DELAY.
    $(`#team`).html('<p>Loading</p>');
        function loadJson() 
        {
            $.ajax({
                type: 'GET',
                url: 'team.json',
                dataType: 'json',
                success: function (data) 
                {
                    let temp= '';
                    $.each(data.team, function (key, val) 
                    {
                        temp += '<h2>' + val.name + '</h2>';
                        temp += '<h5>' + val.position + '</h5>';
                        temp += '<p>' + val.bio + '</p>';
                        
                    });
                    $(`#team`).html(temp);
                },
                error: function()
                {
                    console.log("error");
                }
            });
        }
});
