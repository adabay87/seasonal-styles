$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);
        season = season.toLowerCase();

        /*Spring: #2B7129
        Summer: #EBA52B
        Fall: #A81124
        Winter: #005393*/



        switch(season){
         case "spring":
            //#2B7129
            $("#logo").attr("src","images/spring.gif");
            $("html").css("background-color","#2B7129");
            $("#seasonQuotes").text("Spring is nature's way of saying, 'Let's party!");
            $("#wear").attr("src","images/spring-wear.jpg");
            break;

            case "fall":
   
               $("#logo").attr("src","images/fall.gif");
               $("html").css("background-color","#A81124");
               $("#seasonQuotes").text("Autumn is a second spring when every leaf is a flower. —Albert Camus!");
               $("#wear").attr("src","images/fall-wear.jpg");
               break;
   
  
            case "winter":
               //#2B7129
               $("#logo").attr("src","images/winter.gif");
               $("html").css("background-color","#005393");
               $("#seasonQuotes").text("Winter is a season of recovery and preparation");
               $("#wear").attr("src","images/winter-wear.jpg");
               break;

            case "summer":
               //#2B7129
               $("#logo").attr("src","images/summer.gif");
               $("html").css("background-color","#EBA52B");
               $("#seasonQuotes").text("Live in the sunshine. Swim in the sea. Drink in the wild air. — Ralph Waldo Emerson");
               $("#wear").attr("src","images/summer-wear.jpg");
               break;
   
            default:
               $("#logo").attr("src","images/four-seasons.gif");
               $("html").css("background-color","#fff");
               $("#seasonQuotes").text("Outfitter for All Seasons!!");
               $("#wear").attr("src","images/300x400.png")
           }
    });
});