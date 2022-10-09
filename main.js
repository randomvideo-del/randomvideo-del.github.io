var database = 'https://drive.google.com/drive/folders/1--v_L7ChSnJpK5gaDeN6e4oMOyKiD4yp';

var list = {

  video1: 'video1.mp4',

  video2: 'video2.mp4',

  video3: 'video3.mp4',

  video4: 'video4.mp4',

  video5: 'video5.mp4',

  video6: 'video6.mp4',

  video7: 'video7.mp4',

  video8: 'video8.mp4',

  video1: 'video9.mp4',

  video10: 'video10.mp4',

  video11: 'video11.mp4',

  video12: 'video12.mp4',

  video13: 'video13.mp4',

  video14: 'video14.mp4',

  video15: 'video15.mp4',

  

}

var lenght_list = '15';

function random(MaxSum) {

  var rs = Math.ceil(Math.random()*MaxSum);

  return rs;

}

function nextVideo(){

  var video = document.getElementById('main_video');

  var numvideo = random(lenght_list);

  if (numvideo == 1){

    video.src = list.video1;

  }

  if (numvideo == 2){

    video.src = list.video2;

  }

  if (numvideo == 3) {

    video.src = list.video3;

  }

  if (numvideo == 4) {

    video.src = list.video4;

  }

  if (numvideo == 5) {

    video.src = list.video5;

  }

  if (numvideo == 6) {

    video.src = list.video6;

  }

  if (numvideo == 7) {

    video.src = list.video7;

  }

  if (numvideo == 8) {

    video.src = list.video8;

  }

  if (numvideo == 9) {

    video.src = list.video9;

  }

  if (numvideo == 10) {

    video.src = list.video10;

  }

  if (numvideo == 11) {

    video.src = list.video11;

  }

  if (numvideo == 12) {

    video.src = list.video12;

  }

  if (numvideo == 13) {

    video.src = list.video13;

  }

  if (numvideo == 14) {

    video.src = list.video14;

  }

  if (numvideo == 15) {

    video.src = list.video15;

  }

}


