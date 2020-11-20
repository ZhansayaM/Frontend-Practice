var button = document.getElementById('submit');
button.style.backgroundColor = 'transparent';
button.style.border = '1px solid';
button.style.color = '#DD3142';

var inn = document.getElementsByTagName('input');
inn[0].value = '';
inn[1].value = 'example';
inn[2].placeholder = 'email@mail.com';

/*var pass = document.getElementById('repeat');
pass.parentNode.parentNode.parentNode.removeChild(pass.parentNode.parentNode);*/
document.getElementById('form').removeChild(document.getElementById('repeat-pass'));

document.getElementById('term').checked = true;

for (var i = 0; i < inn.length; i++){
      inn[i].style.borderBottomColor = 'black';
   }


