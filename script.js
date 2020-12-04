const openVscButtons = document.querySelectorAll('[data-vsc-target]')
const closeVscButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openVscButtons.forEach(button => {
	button.addEventListener('click', () => {
		const vsc = document.querySelector(button.dataset.vscTarget)
		openVsc(vsc)
	})
})

closeVscButtons.forEach(button => {
	button.addEventListener('click', () => {
		const vsc = button.closest('.vsc')
		closeVsc(vsc)
	})
})

function openVsc(vsc) {
	if (vsc == null) return
	vsc.classList.add('active')
	overlay.classList.add('active')
}

function closeVsc(vsc) {
	if (vsc == null) return
	vsc.classList.remove('active')
	overlay.classList.remove('active')
}



var x = 1;

function addSelect(divname) {
	while(x) {
   var newDiv=document.createElement('div');
   var html = '<select class="slct" id="Materii">', courses = ["Alege materia","PC", "USO", "Mate1", "Mate2", "Scoala Vietii", "Studiul Manelelor"], i;
   for(i = 0; i < courses.length; i++) {
       html += "<option value='"+courses[i]+"'>"+courses[i]+"</option>";
   }
   html += '</select>';
   newDiv.innerHTML= html;
   document.getElementById(divname).appendChild(newDiv);
   x = 0;
	}
}




   function Projectupdt(divname) {
  var x = document.forms["frm1"];
  var newDiv=document.createElement('div');
  var text = "";
  var i, ok = 1;
  //for (i = 0; i < x.length ;i++) {
  	if (x.elements[0].value != 'Alege materia' && x.elements[1].value != 'Titlul proiectului') {
    text += "<br><li class='a'>" + x.elements[1].value + "</li>";
    text += "<li class='b'>" + '(' + x.elements[0].value + ')' + "</li>";
  } else {
  	 ok = 0;
  }
//}
 if (ok == 0)
 {
 	window.alert("Alege o materie si baga un nume la proiect");
 }
  newDiv.innerHTML= text;
  var theParent = document.getElementById(divname);
  theParent.insertBefore(newDiv, theParent.firstChild);
  
}
   //Created by Severin Sebastian