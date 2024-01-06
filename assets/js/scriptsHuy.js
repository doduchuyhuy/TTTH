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
});
//Hieu ung khi scroll va load
window.addEventListener('load',reveal); //scroll la ban dau 
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i =0; i< reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}


    


    




    
