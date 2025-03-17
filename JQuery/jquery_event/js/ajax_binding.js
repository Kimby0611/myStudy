$(function () {
  let jsonData = null;
  let xmlData = null;

  // JSON 데이터 로드
  $.ajax({
    url: "./js/MOCK_DATA.json",
    dataType: "json",
    success: function (data) {
      jsonData = data;
      console.log("JSON Data loaded:", data);
    },
    error: function (xhr, status, error) {
      console.error("JSON AJAX Error:", status, error);
    },
  });

  // XML 데이터 로드
  $.ajax({
    url: "./js/dataset.xml",
    dataType: "xml",
    success: function (data) {
      xmlData = data;
      console.log("XML Data loaded:", data);
    },
    error: function (xhr, status, error) {
      console.error("XML AJAX Error:", status, error);
    },
  });

  // 테이블 생성 함수
  function createTable(dataSource, isJson) {
    $(".wrap").empty();
    var tb = $("<table />");

    if (isJson) {
      for (var i in dataSource) {
        var $id = dataSource[i].id;
        var $first_name = dataSource[i].first_name;
        var $last_name = dataSource[i].last_name;
        var $email = dataSource[i].email;
        var $gender = dataSource[i].gender;

        var row = $("<tr />").append(
          $("<td />").text($id),
          $("<td />").text($first_name),
          $("<td />").text($last_name),
          $("<td />").text($email),
          $("<td />").text($gender)
        );

        tb.append(row);
      }
    } else {
      $(dataSource)
        .find("record")
        .each(function () {
          var $id = $(this).find("id").text();
          var $first_name = $(this).find("first_name").text();
          var $last_name = $(this).find("last_name").text();
          var $email = $(this).find("email").text();
          var $gender = $(this).find("gender").text();

          var row = $("<tr />").append(
            $("<td />").text($id),
            $("<td />").text($first_name),
            $("<td />").text($last_name),
            $("<td />").text($email),
            $("<td />").text($gender)
          );

          tb.append(row);
        });
    }

    $(".wrap").append(tb).hide().fadeIn("slow");
  }

  // 버튼 클릭 이벤트
  $(".JsonXmlBtn").on("click", function () {
    const $btn = $(this);
    const currentMode = $btn.data("mode");

    console.log("click");

    if (currentMode === "json") {
      if (jsonData && jsonData.length > 0) {
        createTable(jsonData, true);
        $btn.data("mode", "xml").text("XML 데이터 표시");
        console.log("json");
      }
    } else {
      $(xmlData).find("record").length > 0;
      createTable(xmlData, false);
      $btn.data("mode", "json").text("JSON 데이터 표시");
    }
  });
  $(".cancle").on("click", function () {
    $(".wrap").empty();
  });
});
