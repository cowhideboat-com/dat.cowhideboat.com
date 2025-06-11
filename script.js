window.onload = function() {
  // 找到包含所有筆記的 grid 區塊
  var gridContainer = document.getElementsByClassName("grid")[0];
  if (gridContainer) {
    // 利用 getElementsByTagName 取得所有按鈕
    var buttons = gridContainer.getElementsByTagName("button");
    var count = buttons.length;
    // 更新筆記數量顯示
    var noteCountElement = document.getElementById("noteCount");
    if (noteCountElement) {
      noteCountElement.textContent = "目前共有 " + count + " 個筆記";
    }
  }
};
