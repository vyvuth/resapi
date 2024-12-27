var settings = {
  url: "http://localhost:3000/fruit/",
  method: "GET",
  timeout: 0,
};

$.ajax(settings)
  .done(function (response) {
    console.log("Success:", response);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.error("Request Failed:", textStatus, errorThrown);
  });
