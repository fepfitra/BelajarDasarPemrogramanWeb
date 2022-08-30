function myFunction() {
    document.getElementById("dropdown-list").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var dropdown_list = document.getElementById("dropdown-list");
      if (dropdown+list.classList.contains('show')) {
        dropdown_list.classList.remove('show');
      }
    }
  }