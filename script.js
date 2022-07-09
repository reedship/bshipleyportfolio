function openImage(url) {
  window.open(url);
}
function clearAll(){
  clearActive('active-tab');
  clearActive('active-icons');
  clearActive('active-title');
}

function clearActive(c){
  let elements = document.querySelectorAll(`.${c}`)
  elements.forEach(function(el){
    el.className = el.className.replace(c,' ');
  })
}

function selectTab(currentTabID, iconsID) {
  clearAll();
  let newTab = document.getElementById(currentTabID);
  newTab.className += ' active-tab';

  let title = document.getElementById(currentTabID).firstElementChild;
  title.className = title.className += ' active-title';

  icons = document.getElementById(iconsID)
  icons.className += ' active-icons';
}

