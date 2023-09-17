 $(document).ready(function () {
    $("#content")
      .on("mouseenter", "a", function () {
        $(this).animate(
          {
            fontSize: "20px", 
            fontWeight: "bold", 
          },
          300
        );
      })
      .on("mouseleave", "a", function () {
        $(this).animate(
          {
            fontSize: "16px", 
            fontWeight: "normal", 
          },
          300
        );
      });
  
  });
  