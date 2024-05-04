function openMenu(menu){
	menu = document.getElementById('hide_menu').style.width;
	if(menu == ""){
		document.getElementById('hide_menu').style.width="260px";
	}else{
		document.getElementById('hide_menu').style.width="";
	}
}


/*

0920562479

*/


window.addEventListener('scroll' , (e)=>{
	e = scrollY;
	if(e > 400){
		document.getElementById('nav_bar').style.position="fixed"
		document.getElementById('nav_bar').style.boxShadow=" 0px 5px 20px -7px #7c7c7c"
		document.getElementById('nav_bar').style.border="none"
	}else{
		if(e==0){
			document.getElementById('nav_bar').style.position="relative"
		document.getElementById('nav_bar').style.boxShadow="0px 0px 0px 0px"
		document.getElementById('nav_bar').style.borderBottom="2px  #7c7c7c dotted"
		}
	}
})


window.addEventListener('load' , ()=>{
    setTimeout(sec,3000)
})

function sec(){
	document.getElementById('loader').style.display="none";
	document.getElementById('body').style.opacity="1";
}