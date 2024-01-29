function goBack() {
  window.history.back();
}
// back

function inputNumberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}
// number

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

function imgPrivewP(html, target_id) {
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

function imgPrivew(html, target_id, type = "") {
  if (type == 1) {
    add_img_chk_no = 1 + add_img_chk_no;
  }

  if (html.files && html.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      target_id.attr("src", e.target.result);
    };
    reader.readAsDataURL(html.files[0]);
  }
}

function imgDel() {
  if (confirm("이미지 삭제 시 복구할 수 없습니다.\n정말 삭제하시겠습니까?")) {
    alert("이미지가 삭제되었습니다.");
    $(this).parents(".img_id_set").remove();
  }
}
// img

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

function secondReg() {
  alert("변경사항이 저장되었습니다.");
  location.reload();
}
// second

function setDetailImage(event) {
  for (var image of event.target.files) {
    var reader = new FileReader();
    $("div#preview_banner_img").empty();

    reader.onload = function (event) {
      var img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      img.setAttribute("class", "col-lg-6");
      document.querySelector("div#preview_banner_img").appendChild(img);
    };

    // console.log(image);
    reader.readAsDataURL(image);
  }
}
// review

function add_prd_category_1() {
  var add_html = `<tr>
                              <td><input type="text" value="" maxlength="10" id="" /></td>
                              <td><input type="text" value="" maxlength="10" id="" /></td>
                              <td>
                                  <button class="btn_purple_line btn_code_adjust">수정</button>
                                  <button class="btn_purple_light btn_code_delete">삭제</button>
                              </td>
                          </tr>
                          `;
  $("#prd_category_1_table").append(add_html);
}

function edit_prd_category() {
  alert("수정이 완료되었습니다.");
  location.reload();
}

function del_prd_category() {
  if (
    confirm("분류 코드 삭제 시 복구할 수 없습니다.\n정말 삭제하시겠습니까?")
  ) {
    alert("분류 코드가 삭제되었습니다.");
    $(this).parents("tr").remove();
  }
}

function openCtUnder(obj) {
  $(obj).parent().next(".cct_under").slideDown();
}
// code

function filterNum(obj, no) {
  var chkCodeN = $(obj).attr("data-filter");

  $(".filter_tab .cate_code").removeClass("active");
  $(obj).addClass("active");
  $(".filter_edit .filter_edit_box").removeClass("on");
  $(".filter_edit .fe" + chkCodeN).addClass("on");
}

function item_add() {
  var add_fe1 = `
  <tr>
    <td><input type='text' name='item_code' id='item_code' value='' /></td>
    <td><input type='text' name='item_name' id='item_name' value='' /></td>
    <td>
      <button class='btn_purple_line' type='button' onclick='item_edit()' >수정</button>
      <button class='btn_purple_light' type='button' onclick='item_del()' >삭제</button>
    </td>
  </tr>
  `;

  $(".fe1 #item_list").append(add_fe1);
}

function filter_add() {
  var add_fe2 = `
  <tr>
    <td>f_form</td>
    <td>형태</td>
    <td><input type="text" name="filter_name" value="디자인" /></td>
    <td>
      <button class="btn_purple_line" onclick="item_edit()">수정</button>
      <button class="btn_purple_light" onclick="item_del()">삭제</button>
    </td>
  </tr>
  `;

  $(".fe2 #filter_list").append(add_fe2);
}

function item_edit() {
  alert("수정이 완료되었습니다.");
  location.reload();
}

function item_del() {
  if (confirm("항목 삭제 시 복구할 수 없습니다.\n정말 삭제하시겠습니까?")) {
    alert("항목이 삭제되었습니다.");
  }
  location.reload();
}

function openFeUnder(obj) {
  $(obj).parent().next(".feb_under").slideDown();
}
// filters

function setting_save() {
  alert("저장이 완료되었습니다.");
  location.reload();
}
// sort

function menu_save() {
  alert("저장이 완료되었습니다.");
  location.reload();
}

function menu_del() {
  if (confirm("메뉴 삭제 시 복구할 수 없습니다.\n정말 삭제하시겠습니까?")) {
    alert("메뉴가 삭제되었습니다.");
  }
  location.reload();
}

function next_2depth() {
  $(".depth_1").removeClass("active");
  $(".depth_2").addClass("active");
}

function next_3depth() {
  $(".depth_2").removeClass("active");
  $(".depth_3").addClass("active");
}

function pre_1depth() {
  $(".depth_2").removeClass("active");
  $(".depth_1").addClass("active");
}

function pre_2depth() {
  $(".depth_3").removeClass("active");
  $(".depth_2").addClass("active");
}

function ca_filter_add() {
  var ca_filter = `
  <tr>
    <th>항목</th>
    <td class="filter_area">
      <div class="flex_box">
        <p>필터</p>
        <button class="del_filter">
          <span class="lnr lnr-cross"></span>
        </button>
      </div>
      <div class="flex_box">
        <p>필터</p>
        <button class="del_filter">
          <span class="lnr lnr-cross"></span>
        </button>
      </div>
    </td>
    <td><button class="btn_bk">항목 삭제</button></td>
  </tr>
  `;

  $(".pop_filter #filter_list").append(ca_filter);
}
// menu

function exec_request() {
  alert("의뢰가 등록되었습니다.");
  location.reload();
}

function addReTr() {
  var add_retr = `
  <tr>
    <td>fl_77_77</td>
    <td><input type="text" name="prd_name[]" id="prd_name[]" /></td>
    <td><input type="text" name="prd_size[]" id="prd_size[]" /></td>
    <td><input type="text" name="prd_price[]" id="prd_price[]" onkeyup="inputNumberFormat(this)" /></td>
    <td><input type="text" name="prd_unit_price[]" id="prd_unit_price[]" onkeyup="inputNumberFormat(this)" /></td>
    <td><input type="text" name="prd_origin_link[]" id="prd_origin_link[]" /></td>
    <td><button class="btn_purple_light" type="button" onclick="addReTr();">추가</button></td>
  </tr>
  `;

  $("#prd_input_form .request_table_add").append(add_retr);
}
// request

$(document).ready(function () {
  $("#residence_submit").on("click", function () {
    alert("등록이 완료되었습니다.");
    window.history.back();
  });
  // back

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

  $.datepicker.setDefaults($.datepicker.regional["ko"]);

  //시작일.
  $("#StartDate").datepicker({
    prevText: "이전 달",
    nextText: "다음 달",
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    maxDate: new Date(),
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

  $(".portfolio_write .input_wrap_plus").on("click", function () {
    var index = $(this).data("index");
    var total = $('input[name="input_imgs' + index + '[]"]').length;

    var radio_total = $('input[name="list_index"]').length;
    radio_total = 1 + radio_total;

    total = total + 1;

    var inp = "$('#view_imgs" + index + "_" + total + "')";

    var html = "";
    html += '<div class="img_id_set">';
    html += "<div class='imgfile_box'>";
    html +=
      "<img src='' data-file='" +
      total +
      "' class='selProductFile' id='view_imgs" +
      index +
      "_" +
      total +
      "' />";
    html += "</div>";
    html +=
      '<input type="file" name="input_imgs' +
      index +
      '[]" id="input_imgs' +
      index +
      "_" +
      total +
      '" class="input_imgs' +
      index +
      '" onchange="imgPrivewP(this,' +
      inp +
      ',1)" />';
    html +=
      "<input type='text' name='content_tag" +
      index +
      "[]' id='content_tag" +
      index +
      "_" +
      total +
      "' value='' placeholder='태그를 입력해주세요.' />";
    html +=
      "<a href='javascript:void(0);' onclick='imgDel()' class='btn_delete'>";
    html += "<i class='fa fa-times-circle'></i>";
    html += "</a>";
    html += "<div class='exposure'>";
    html +=
      "<input type='radio' name='list_index' value='" + radio_total + "' />";
    html +=
      "<label for='list_index' class='list_index'>리스트 노출 이미지</label>";
    html += "</div>";
    html += "</div>";

    // add_img_no = 1 + add_img_no;
    $(".input_imgs_wrap" + index).append(html);
  });
  // portfolio_write

  $(".progress_write .input_wrap_plus").on("click", function () {
    var index = $(this).data("index");
    var total = $('input[name="input_imgs' + index + '[]"]').length;

    var radio_total = $('input[name="list_index"]').length;
    radio_total = 1 + radio_total;

    total = total + 1;

    var inp = "$('#view_imgs" + index + "_" + total + "')";

    var html = "";
    html += '<div class="img_id_set">';
    html += "<div class='imgfile_box'>";
    html +=
      "<img src='' data-file='" +
      total +
      "' class='selProductFile' id='view_imgs" +
      index +
      "_" +
      total +
      "' />";
    html += "</div>";
    html +=
      '<input type="file" name="input_imgs' +
      index +
      '[]" id="input_imgs' +
      index +
      "_" +
      total +
      '" class="input_imgs' +
      index +
      '" onchange="imgPrivewP(this,' +
      inp +
      ',1)" />';
    html +=
      "<a href='javascript:void(0);' onclick='imgDel()' class='btn_delete'>";
    html += "<i class='fa fa-times-circle'></i>";
    html += "</a>";
    html += "</div>";

    $(".input_imgs_wrap" + index).append(html);
  });
  // progress_write

  $(".cate_code_tab button").each(function () {
    var codeTab = $(this);
    var codeEdit = $(".cc_tab_box");

    codeTab.on("click", function (e) {
      e.preventDefault();

      var target = $(this);
      var index = target.index();

      target.siblings().removeClass("active");
      target.addClass("active");

      codeEdit.eq(index).siblings().removeClass("on");
      codeEdit.eq(index).addClass("on");
    });
  });
  // code

  $(".open_filter").on("click", function () {
    $(".pop_filter").fadeIn(100);
  });
  // menu

  $(".guide_open").on("click", function () {
    $(".guide").show();
  });

  $(".guide_close").on("click", function () {
    $(".guide").hide();
  });

  $(".asset_rotate").each(function () {
    var numberInptut = $(".asset_rotate .rotate-input");
    var minValue = 0.0;
    var maxValue = 360.0;
    $(".asset_rotate .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");
        numberInptut.val(ui.value);
        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value.toFixed(1));
      },
    });

    numberInptut.on("keyup", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".rotate_list .rotate-slider").slider("value", value);
    });
  });

  $(".door_angle").each(function () {
    var numberInptut = $(".door_angle .door_input");
    var minValue = 0.0;
    var maxValue = 130.0;

    $(".door_angle .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value.toFixed(1));
      },
    });

    numberInptut.on("keyup", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".door_angle .door-slider").slider("value", value);
    });
  });

  $(".asset_offset").each(function () {
    var numberInptut = $(".asset_offset .offset-input");
    var minValue = -10.0;
    var maxValue = 10.0;

    $(".asset_offset .offset-slider").slider({
      range: "min",
      value: 0,
      min: minValue,
      max: maxValue,
      step: 0.1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value.toFixed(1));
      },
    });

    numberInptut.on("keyup", function () {
      // delay(function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".rotate_list .offset-slider").slider("value", value);
    });
  });

  $(".asset_scale").each(function () {
    var numberInptut = $(".asset_scale .scale-input");
    var minValue = 1.0;
    var maxValue = 20.0;

    $(".asset_scale .scale-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 0.1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value.toFixed(1));
      },
    });

    numberInptut.on("keyup", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".rotate_list .scale-slider").slider("value", value);
    });
  });

  $(".material_list button").on("click", function () {
    $(this).parent("li").siblings().removeClass("active");
    $(this).parent("li").addClass("active");
  });

  $(".global_position").each(function () {
    var numberInptut = $(".global_rotate_slider ");
    var minValue = 0;
    var maxValue = 360;

    $(".global_rotate .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value);
      },
    });

    numberInptut.on("change", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".global_rotate_slider .calc-slider").slider("value", value);
    });
  });

  $(".ao_amount").each(function () {
    var numberInptut = $(".ao_amount_slider .calc-input");
    var minValue = 0;
    var maxValue = 1;

    $(".ao_amount_slider .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 0.1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value);
      },
    });

    numberInptut.on("change", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".ao_amount_slider .calc-slider").slider("value", value);
    });
  });

  $(".metallic_amount").each(function () {
    var numberInptut = $(".metallic_amount_slider .calc-input");
    var minValue = 0;
    var maxValue = 1;

    $(".metallic_amount_slider .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 0.1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value);
      },
    });

    numberInptut.on("change", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".metallic_amount_slider .calc-slider").slider("value", value);
    });
  });

  $(".roughness_amount").each(function () {
    var numberInptut = $(".roughness_amount .calc-input");
    var minValue = 0;
    var maxValue = 1;

    $(".roughness_amount_slider .calc-slider").slider({
      range: "min",
      value: minValue,
      min: minValue,
      max: maxValue,
      step: 0.1,
      change: function (event, ui) {
        var sliderBefore = $(".ui-slider-horizontal .ui-slider-range-min");

        numberInptut.val(ui.value);

        if (ui.value == maxValue) {
          sliderBefore.css("background-color", "#412153");
        } else {
          sliderBefore.css("background-color", "#5E2F77");
        }
      },
      slide: function (event, ui) {
        numberInptut.val(ui.value);
      },
    });

    numberInptut.on("change", function () {
      var value = numberInptut.val();
      if (value < minValue) {
        numberInptut.val(minValue);
      }
      if (value > maxValue) {
        numberInptut.val(maxValue);
      }
      $(".roughness_amount_slider .calc-slider").slider("value", value);
    });
  });

  $("#emi_color").minicolors({
    animationEasing: "swing",
    changeDelay: 0,
    control: "hue",
    defaultValue: "",
    format: "hex",
    showSpeed: 100,
    hideSpeed: 100,
    inline: false,
    keywords: "",
    letterCase: "lowercase",
    opacity: false,
    position: "bottom left",
    theme: "default",
    swatches: [],
  });
  // inhouse

  $(".open_error").on("click", function () {
    $(".error").show();
  });

  $(".close_error").on("click", function () {
    $(".error").hide();
  });

  $(".open_search_asset").on("click", function () {
    $(".pop_search_asset").fadeIn(100);
  });

  $(".pop_search_asset .btn_purple_dark").on("click", function () {
    alert("적용되었습니다.");
    $(".pop_search_asset").fadeOut(100);
  });
  // plan

  $(document).on("click", ".pop_open_faq", function () {
    $(".pop_faq").fadeIn(100);
  });

  $(document).on("click", ".pop_open_kind", function () {
    $(".pop_kind").fadeIn(100);
  });
  // faq
});
