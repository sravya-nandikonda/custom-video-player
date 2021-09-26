const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play and pause video
function toggleVideoStatus()
{
   if(video.paused)           //checks if the video is paused
   {
       video.play();          //plays the video
   }
   else                       //these are inbuilt properties for video tag
   {
      video.pause();       
   }
}

//update play/pause icon
function updatePlayIcon()
{
    if(video.paused)
    {
        play.innerHTML="<i class='fa fa-play fa-2x'> </i>";
    }
    else
    {
        play.innerHTML="<i class='fa fa-pause fa-2x'> </i>";
    }
}

//update progress and time stamp
function  updateProgress()
{
  progress.value= (video.currentTime/video.duration)*100;
  //get minutes
  let mins=Math.floor(video.currentTime/60);
  if(mins<10){
      mins= '0'+String(mins);
  }

  //get seconds
  let sec=Math.floor(video.currentTime%60);
  if(sec<10){
      sec= '0'+String(sec);
  }

  timestamp.innerHTML = `${mins}:${sec}`;

} 

//set video time progress
function  setVideoProgress()
{
    video.currentTime = (+progress.value * video.duration)/100;
}                //+ is used to make sure it's a number

//stop video
function stopVideo()
{
    //video.stop() is not a function
    video.currentTime=0;
    video.pause();   //just pausing the video ..not changing the icon
}

//event listeners
video.addEventListener("click",toggleVideoStatus);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);
//the above event listeners are called...when the user clicks on the video

play.addEventListener('click',toggleVideoStatus);

stop.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoProgress);
