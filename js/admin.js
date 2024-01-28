function goBack() {
  window.history.back();
}
// back

function fileUploadAction() {
  console.log("fileUploadAction");
  $("#input_thumbnail").trigger("click");
}

function handleImgFileSelect_thumb(e) {
  sel_files = [];
  $(".thumbnail_wrap").empty();

  var files = e.target.files;
  var filesArr = Array.prototype.slice.call(files);

  if (files.length > 5) {
    alert("썸네일 이미지의 파일첨부는 최대 5개까지 가능합니다.");
    $("#input_thumbnail").val("");
    return false;
  }

  var index = 0;
  filesArr.forEach(function (f) {
    if (!f.type.match("image.*")) {
      alert("확장자는 이미지 확장자만 가능합니다.");
      return;
    }
    sel_files.push(f);

    var reader = new FileReader();
    reader.onload = function (e) {
      var html =
        '<div class="thumbnail_id_' +
        index +
        '"><img src="' +
        e.target.result +
        "\" data-file='" +
        f.name +
        "'></div> ";
      $(".thumbnail_wrap").append(html);
      index++;
    };
    reader.readAsDataURL(f);
  });
}

function fileUploadAction() {
  console.log("fileUploadAction");
  $("#input_imgs0").trigger("click");
}

function handleImgFileSelect_thumb0(e) {
  sel_files = [];
  $(".input_imgs_wrap").empty();

  var files = e.target.files;
  var filesArr = Array.prototype.slice.call(files);

  var index = 0;
  filesArr.forEach(function (f) {
    if (!f.type.match("image.*")) {
      alert("확장자는 이미지 확장자만 가능합니다.");
      return;
    }
    sel_files.push(f);
    var reader = new FileReader();
    reader.onload = function (e) {
      var html =
        '<div class="input_imgs_id_' +
        index +
        '"><img src="' +
        e.target.result +
        "\" data-file='" +
        f.name +
        "'></div> ";
      $(".input_imgs_wrap").append(html);
      index++;
    };
    reader.readAsDataURL(f);
  });
}

function imgPrivew(html, target_id) {
  if (html.files && html.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      target_id.attr("src", e.target.result);
    };
    reader.readAsDataURL(html.files[0]);
  }
}
// imgPrivew

function registration() {
  alert("등록이 완료되었습니다.");
}
// registration

function printArea() {
  window.print();
}
// print

function open_memo(obj, company_code) {
  $("#memo_company_code").val(company_code);
  $("#company_memo_content").val("");
  $(".pop_memo").stop().fadeIn();
}

function open_all_memo(obj) {
  $(obj).parent().parent().find(".all_memo").stop().slideDown();
  $(obj).parent().parent().find(".simple_memo").hide();
}

function close_all_memo(obj) {
  $(obj).parent().parent().stop().slideUp();
  $(obj).parent().parent().parent().find(".simple_memo").show();
}

function adjust_all_memo(obj) {
  $(obj).parent().parent().find(".am_box").addClass("on");
}

function reg_memo(company_code) {
  alert("메모가 작성되었습니다.");
  $("#company_memo_content").val("");
  $(".pop_memo").fadeOut(100);
}

function close_memo() {
  $(".pop_memo").fadeOut(100);
}

function pay_reg() {
  alert("수기 결제가 완료되었습니다.");
  $(".pop_write").fadeOut(100);
}

function period_reg() {
  alert("이월이 완료되었습니다.");
  $(".pop_forward").fadeOut(100);
}
// popup

var bDisplay = true;

function doDisplay() {
  var con = document.getElementById("consulting_detail");
  if (con.style.display == "none") {
    con.style.display = "block";
    $(".consulting_btn").removeClass("open");
  } else {
    con.style.display = "none";
    $(".consulting_btn").addClass("open");
  }
}
// estimate_view

function complete_order() {
  alert("발주가 완료되었습니다.");
  location.href = "./result.html";
}
// status

function chk_area_click(target, business_area) {
  $(".es_btn").removeClass("active");
  $(target).addClass("active");
}

function viewSelPop(obj) {
  $(obj).next(".lb_cont").stop().slideDown();
}

function selAll(obj) {
  var estInp = $('.living_box .lb_cont .lbc_box input[type="checkbox"]');
  var chkSelCla = $(obj).hasClass("on");

  $(obj).toggleClass("on");

  if (!chkSelCla) {
    estInp.prop("checked", false);
    estInp.prop("checked", true);
  } else {
    estInp.prop("checked", false);
  }
}

function closeAll(obj) {
  $(".living_box .lb_cont").stop().slideUp();
}

function resetFin() {
  var estInp = $('.living_box .lb_cont .lbc_box input[type="checkbox"]');

  estInp.prop("checked", false);
  $(".living_box .lb_cont .lb_all_sel").removeClass("on");
  $(".living_box .lb_select span").text("선택");
}

function selectFin() {
  $(".living_box .lb_select span").text("선택적용");
  $(".living_box .lb_cont").stop().slideUp();
}

function open_syView() {
  $(".pop_paysys").fadeIn();
}

function close_syView() {
  $(".pop_paysys").fadeOut(100);
}
// status_view

function update_order_contract() {
  if (confirm("업체와 발주계약을 진행 하시겠습니까?")) {
    alert("계약이 완료되었습니다.");
  } else {
    alert("계약이 취소되었습니다.");
  }
  location.reload();
}

function update_customer_meet_time() {
  if (confirm("미팅 시간을 적용하시겠습니까?")) {
    alert("미팅 시간이 적용되었습니다.");
  } else {
    alert("미팅 시간이 취소되었습니다.");
  }
  location.reload();
}
// result

function open_cpView() {
  $(".pop_progress").fadeIn();
}

function close_cpView() {
  $(".pop_progress").fadeOut(100);
}
// cp

function update_company_sort() {
  alert("노출 순위가 적용되었습니다.");
  location.reload();
}

function update_company_grade() {
  alert("등급이 적용되었습니다.");
  location.reload();
}
// partner

function company_update() {
  alert("등록이 완료되었습니다.");
  location.href = "./partner.html";
}

function fnImgPop(url) {
  var img = new Image();
  img.src = url;
  var img_width = img.width;
  var win_width = img.width + 0;
  var img_height = img.height;
  var win = img.height + 0;
  var OpenWindow = window.open(
    "",
    "_blank",
    "width=" +
      img_width +
      ", height=" +
      img_height +
      ", menubars=no, scrollbars=auto"
  );
  OpenWindow.document.write(
    "<style>body{margin:0px;}</style><img src='" +
      url +
      "' width='" +
      win_width +
      "'>"
  );
}
// partner_view

$(document).ready(function () {
  $("#today").text(new Date().toLocaleDateString());

  $.datepicker.setDefaults($.datepicker.regional["ko"]);

  $("#fromDate").datepicker({
    setDate: "today",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    onClose: function (selectedDate) {
      $("#toDate").datepicker("option", "minDate", selectedDate);
    },
  });

  $("#toDate").datepicker({
    setDate: "today",
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    onClose: function (selectedDate) {
      $("#fromDate").datepicker("option", "maxDate", selectedDate);
    },
  });
  // date

  $("#chkall").on("click", function () {
    if ($("#chkall").is(":checked")) {
      $(".chk").prop("checked", true);
    } else {
      $(".chk").prop("checked", false);
    }
  });

  $("#checkall").on("click", function () {
    if ($("#checkall").is(":checked")) {
      $(".chk").prop("checked", true);
    } else {
      $(".chk").prop("checked", false);
    }
  });

  $(".chk").on("click", function () {
    var total = $(".chk").length;
    var checked = $(".chk:checked").length;

    if (total != checked) $("#checkall").prop("checked", false);
    else $("#checkall").prop("checked", true);
  });
  // check

  $(".pg_page").on("click", function () {
    $(this).siblings().removeClass("pg_current");
    $(this).addClass("pg_current");
  });
  // pagenation

  $("#input_thumbnail").on("change", handleImgFileSelect_thumb);
  $("#input_imgs0").on("change", handleImgFileSelect_thumb0);
  // imgPrivew

  $(document).on("click", ".pop_open", function () {
    $(".pop_wrap").fadeIn(100);
  });

  $(document).on("click", ".pop_close", function () {
    $(".pop_wrap").fadeOut(100);
  });

  $(document).on("click", ".pop_footer button", function () {
    $(".pop_wrap").fadeOut(100);
  });

  // popup

  $("#search_recent_3days").on("click", function () {
    $(this).toggleClass("btn_gy");
    $(this).toggleClass("btn_bk");
  });
  // status_view

  $(".open_write").on("click", function () {
    $(".pop_write").fadeIn(100);
  });

  $(".open_forward").on("click", function () {
    $(".pop_forward").fadeIn(100);
  });

  $(".forward_month").on("click", function () {
    $("#period_check").val($(this).data("idx"));
    var date = new Date();
    date.setMonth(date.getMonth() + $(this).data("idx"));
    $(".forward_txt").text(
      "※ 이월 이용기간 : " + date.toISOString().substr(0, 10) + " 까지"
    );
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $(".open_change").on("click", function () {
    $(".pop_change").fadeIn(100);
  });

  $(".pop_write .btn_search").on("click", function () {
    $(".pop_search").fadeIn(100);
  });
  // contract

  $(document).on("click", ".open_order", function () {
    $(".pop_order").fadeIn(100);
  });

  $(document).on("click", ".open_approval", function () {
    $(".pop_approval").fadeIn(100);
  });
  // contract_view

  $(document).on("click", ".pop_open_faq", function () {
    $(".pop_faq").fadeIn(100);
  });

  $(document).on("click", ".pop_open_kind", function () {
    $(".pop_kind").fadeIn(100);
  });
  // faq
});
