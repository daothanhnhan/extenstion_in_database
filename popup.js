// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('check');
  checkButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {method: "changePage"}, function(response) {
          if(response.method == "changePage"){
            // alert("Succeeded with "+response.method);
          }
          // alert('tuan2');
          // alert(response.img);
          var name = response.text;
          var price = response.price;
          var des1 = response.des;
          // des1 = des1.substr(2);
          // des1 = '<h1>text</h1>';
          des1 = des1.trim();
          // des1 = des1.replaceAll("\n", "");
          // des1 = encodeURIComponent(des1);
          
          // des1 = '<p>Sữa rửa mặt <strong>Thanakha Facial Foam – Perfect Pore Solutions</strong></p><ul><li>Nhẹ nhàng làm sạch bụi bẩn, bã nhờn sâu bên trong lỗ chân lông</li><li>Thu hẹp lỗ chân lông</li><li>Ngăn ngừa mụn cám &amp; mụn đầu đen</li><li>Dùng được cho cả nam &amp; nữ</li><li>Phù hợp cho mọi loại da</li></ul><p>&nbsp;</p>';
          // alert(des1);
          content = response.content;
          content = content.trim();
          // content = encodeURIComponent(content);
          // alert(content);
          img = response.img;

          const xhttp = new XMLHttpRequest();
          xhttp.onload = function() {
            // document.getElementById("demo").innerHTML = this.responseText;
             alert(this.responseText);
            }
          // xhttp.open("GET", "http://taobao1.cafelink.org/extension/product.php?name="+name+"&price="+price+"&des="+des1+"&content="+content, true);
          // xhttp.send();
          xhttp.open("POST", "http://taobao1.cafelink.org/extension/product.php");
          xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhttp.send("name="+name+"&price="+price+"&des="+des1+"&content="+content+"&img="+img);
        });
      });
  }, false);
}, false);