function validateComment(){
    var myComment = document.getElementById("styled");
    var numStars = document.getElementById("stars");

    if(numStars.value == "0"){
        alert("Please rate this show!");
    }
    if(myComment.value == "Enter comment here..." || myComment.value == ""){
        alert("Please write a comment!");
    }
}