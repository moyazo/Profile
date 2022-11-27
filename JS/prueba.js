move();


function move(){
    let i = 0;
    
    if (i == 0) {
      i = 1;
      let elem = document.getElementById("myBar");
      let height = 1;
      let id = setInterval(frame, (2000/60));
      function frame() {
        if (height >= 40) {
          clearInterval(id);
          i = 0;
        } else {
          height++;
          elem.style.height = height + "vh";
        }
      }
    }
    bool = false;

}

// $('#exampleModalCenter').on('show.bs.modal', function () {
//     $('#exampleModalCenter').trigger('focus')
//   })