

 $(function () {
    $(document).scroll(function () {
      var $nav = $(".phoneVersion");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      var scrollBuffer = 50;

      
      if($(this).scrollTop() < $('#briefInfoSection').position().top - scrollBuffer){
        $('#phoneScreenPlace').text("Aman Shrestha");
        $(".phoneVersion").css('background-color', '#00000000');
        $(".phoneVersion").css('box-shadow', '0 0 0 #00000000');
      }
      

      if ($(this).scrollTop() >= $('#briefInfoSection').position().top - scrollBuffer && $(this).scrollTop() < $('#ExperiencePage').position().top) {
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Profile').addClass("chosen");

        $('#phoneScreenPlace').text("Profile");
        $(".phoneVersion").css("background-color", "#7facda");

        $(".phoneVersion").css('box-shadow', '0 5px 5px #353535');


      }
      if ($(this).scrollTop() >= $('#ExperiencePage').position().top - scrollBuffer && $(this).scrollTop() < $('#ProjectsPage').position().top) {            
        
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Experience').addClass("chosen");

        $('#phoneScreenPlace').text("Work Experience");
        

        $(".phoneVersion").css("background-color", "#3e4464");

      }
      if ($(this).scrollTop() >= $('#ProjectsPage').position().top - scrollBuffer && $(this).scrollTop() < $('#LeadershipPage').position().top) {
        
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Projects').addClass("chosen");

        $('#phoneScreenPlace').text("Projects");

        $(".phoneVersion").css("background-color", "#7facda");


      }
      if ($(this).scrollTop() >= $('#LeadershipPage').position().top - scrollBuffer && $(this).scrollTop() < $('#SkillsPage').position().top) {
        
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Leadership').addClass("chosen");
        
        $('#phoneScreenPlace').text("Leadership Experience");
        $(".phoneVersion").css("background-color", "#5D6F80");


      }
      if ($(this).scrollTop() >= $('#SkillsPage').position().top - scrollBuffer &&  $(this).scrollTop() < $('#contactPage').position().top) {
        
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Skills').addClass("chosen");

        $('#phoneScreenPlace').text("Skills");
        $(".phoneVersion").css("background-color", "#7facda");


      }
      //Different for this
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".nav").find(".chosen").removeClass("chosen");
        $('#navTo_Contact').addClass("chosen");

        $('#phoneScreenPlace').text("Contact");
      }

    });

    // $(".mainNavBar .nav-link").on("click", function(){
    //   // alert("motherfucker")
    //   $(".nav").find(".chosen").removeClass("chosen");
    //   $(this).addClass("chosen");
    // });

  });