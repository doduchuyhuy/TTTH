$(document).ready(function(){
    function remove_background(id)
    {
    for(var count = 1; count <= 5; count++)
    {
      $('#'+id+'-'+count).css('color', '#ccc');
    }
  }

 //hover chuột đánh giá sao
  $(document).on('mouseenter', '.rating-star', function(){
    var index = $(this).data("index");
    var id = "15";
  // alert(index);
  // alert(movie_id);
    remove_background(id);
    for(var count = 1; count<=index; count++)
    {
      $('#'+id+'-'+count).css('color', '#ffcc00');
    }
  });
  //nhả chuột ko đánh giá
  $(document).on('mouseleave', '.rating-star', function(){
    // var index = $(this).data("index");
    var id = "15";
    var rating = $(this).data("rating");
    remove_background(id);
    //alert(rating);
    for(var count = 1; count<=rating; count++)
    {
      $('#'+id+'-'+count).css('color', '#ffcc00');
    }
  });
  //click đánh giá sao 

  // $('.js-toggle').on("click", function(){
  //   $('#navbar').toggleClass('show');
  //   // $('.sidebar').toggleClass('sidebar-open');
  //   // alert('hihi')
  // });
        
        //   var modal = document.getElementById('myModal');
        //   // Lấy đường dẫn của hình ảnh và gán vào trong phần Modal
        //   var images = document.getElementsByClassName('myImg');
        //   var modalImg = document.getElementById("img01");
        //   for (var i = 0; i < images.length; i++) {
        //       var img = images[i];
        //       // and attach our click listener for this image.
        //       img.onclick = function(evt) {
        //       modal.style.display = "block";
        //       modalImg.src = this.src;
        //         }
        //     }
        //     // lấy button span có chức năng đóng Modal
        //     // var span = document.getElementsByClassName("close")[0];
        //     //Khi button được click, đóng modal
        //     // span.onclick = function() { 
        //     //     modal.style.display = "none";
        //     // }
        //  modal.onclick = function(evt) { 
        //  modal.style.display = "none";
        //     }            
  
});



    


    

// $(window).on('load', function(){

//   $('.js-toggle').on("click", function(){
//     $('#navbar').toggleClass('show');
//     // $('.sidebar').toggleClass('sidebar-open');
//     // alert('hihi')
//   });
        
//           var modal = document.getElementById('myModal');
//           // Lấy đường dẫn của hình ảnh và gán vào trong phần Modal
//           var images = document.getElementsByClassName('myImg');
//           var modalImg = document.getElementById("img01");
//           for (var i = 0; i < images.length; i++) {
//               var img = images[i];
//               // and attach our click listener for this image.
//               img.onclick = function(evt) {
//               modal.style.display = "block";
//               modalImg.src = this.src;
//                 }
//             }
//             // lấy button span có chức năng đóng Modal
//             // var span = document.getElementsByClassName("close")[0];
//             //Khi button được click, đóng modal
//             // span.onclick = function() { 
//             //     modal.style.display = "none";
//             // }
//          modal.onclick = function(evt) { 
//          modal.style.display = "none";
//             }            
// })


    
