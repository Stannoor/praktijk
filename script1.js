function fetchBlogArticles() {
  $.ajax({
    url: "blog_articles.html",
    method: "GET",
    dataType: "html",
    success: function (data) {
      const articles = $(data).find(".blog-article").slice(0, 3);
      $("#content").html(articles);
    },
    error: function (xhr, status, error) {
      console.error(
        "Fout bij het ophalen van blogartikelen: " + status + ", " + error
      );
    },
  });
}
$(document).ready(function () {
  fetchBlogArticles();
});


 // jQuery UI-hover-effect 
$(document).ready(function() {
  $(".menu-item").hover(function() {
    $(this).addClass("ui-state-hover");
  }, function() {
    $(this).removeClass("ui-state-hover");
  });
});

 
$(document).ready(function () {
  $("#blogForm").submit(function (e) {
    e.preventDefault();
    const formData = $(this).serialize(); 
    $.ajax({
      url: "../submit-article.php", 
      type: "POST", 
      data: formData,
      dataType: "json", 
      success: function (response) {
        if (response.success) {
         
          $("#blogForm")[0].reset();
          alert("Blog article added successfully!");
        } else {
          alert("Failed to add the blog article. Please try again.");
        }
      },
      error: function (error) {
        console.error("Error submitting blog article:", error);
        alert("An error occurred. Please try again later.");
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const blogForm = document.getElementById("blogForm");

  blogForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate title
    const titleInput = document.getElementById("title");
    const titleValue = titleInput.value.trim();
    if (titleValue === "") {
      alert("Dit veld is verplicht.");
      return;
    }

    // Validate author
    const authorInput = document.getElementById("author");
    const authorValue = authorInput.value.trim();
    if (authorValue === "") {
      alert("Dit veld is verplicht");
      return;
    }

    // Validate publication date
    const publicationDateInput = document.getElementById("publicationDate");
    const publicationDateValue = publicationDateInput.value.trim();
    if (publicationDateValue === "") {
      alert("Dit veld is verplicht");
      return;
    }

    // Validate content
    const contentTextarea = document.getElementById("content");
    const contentValue = contentTextarea.value.trim();
    if (contentValue === "") {
      alert("Dit veld is verpicht.");
      return;
    }

    blogForm.reset();
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });
  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});



$(document).ready(function () {
  $("#div1")
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

