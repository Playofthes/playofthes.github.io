let currentpage = 0;
const main_div = document.querySelector(".div");

function page1() {
    main_div.innerHTML = '<iframe src="page1.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>';
    setTimeout(page2, 1000);
}

function page2() {
    main_div.innerHTML = '<iframe src="page2.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>';
    setTimeout(page3, 1000);
}

function page3() {
    main_div.innerHTML = '<iframe src="page3.html" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>';
    setTimeout(page1, 1000);
}

page1();