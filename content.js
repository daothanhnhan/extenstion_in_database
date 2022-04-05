// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changePage"){
            // document.body.innerText = "Foot";
            // sendResponse({text: "hello", method: "changePage"}); //same as innerText
            var h2 = document.getElementsByTagName("h2")[0];
            // alert(h2.innerText);
            var price = document.getElementsByClassName("price")[0];
            price = price.innerText;
            price = price.substr(0, price.length-2);
            price = price.replace(',', '');
            // alert(price);
            var des = document.getElementsByClassName("woocommerce-product-details__short-description")[0];
            // alert(des.innerHTML);
            var content = document.getElementById("tab-description");
            // alert(content.innerHTML);
            var img = document.getElementsByClassName("gallery-control")[0];
            // alert(img);
            // document.body.innerText = img.innerHTML;
            var imgTags = img.innerHTML.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
            // document.body.innerHTML = imgTags;
			// alert(imgTags[0]);
			var src;
			var arr_img = [];
			// alert(imgTags.length);
			for (i=0;i<imgTags.length;i++) {
				src = imgTags[i].match(/src="[^"]*"/gm);
				// alert(src[0]);
				// alert(arr_img.includes(src[0]));
				if (i >= 4) {
					if (arr_img.includes(src[0])) {
					// alert('ok');
					// arr_img.push(src);
					} else {
						// alert('no');
						arr_img.push(src[0]);
					}
				}
				
				if (i == 7) {
					// break;
				}
			}
			// alert(arr_img.length);

			// const xhttp = new XMLHttpRequest();
			//   xhttp.onload = function() {
			//     // document.getElementById("demo").innerHTML = this.responseText;
			//     	alert(this.responseText);
			//     }
			//   xhttp.open("GET", "http://taobao1.cafelink.org/database.php", true);
			//   xhttp.send();

			// var xhr = new XMLHttpRequest();
			// xhr.open("GET", "http://taobao1.cafelink.org/extension/product.php", true);
			// xhr.onreadystatechange = function() {
			//   if (xhr.readyState == 4) {
			//     // WARNING! Might be evaluating an evil script!
			//     // var resp = eval("(" + xhr.responseText + ")");
			//     alert('ajax');
			//     // alert(xhr.responseText);
			//   }
			// }
			// xhr.send();

			sendResponse({text: h2.innerText, price: price, des: des.innerHTML, content: content.innerHTML, img: arr_img, method: "changePage"});
        }
        // sendResponse({text: "123", method: "changePage"});
    }
);
// alert('content');