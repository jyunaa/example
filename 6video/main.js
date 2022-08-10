//배열 
//let arr = ['짱구', '철수' , '훈이' , '유리'];
//배열안에 입력된 값을 요소라고 한다.
//console.log(arr);
//훈이만 출력하기
//console.log(arr[2]);
//배열안에 요소들 각각의 할 일 부여
//arr.forEach(function(요소를가져올변수 내가만들면됨){});
//arr.forEach(function(item){
    //console.log(item + "야 안녕~")
//});

var allVideos=document.querySelectorAll('.video');
var allPlay=document.querySelector('#play-all');

console.log(allVideos);

allVideos.forEach(function(v){
    v.addEventListener('mouseover',function(){
        //.video 안의 tagname video를 불러옴
        var video = v.querySelector('video')
        video.play();
    })
    v.addEventListener('mouseleave',function(){
        //.video 안의 tagname video를 불러옴
        var video = v.querySelector('video')
        video.pause();
    })
});

allPlay.addEventListener('click',function(){
    //클래스 on을 가지고 있는가? (has는 jquery)
    if(allPlay.classList.contains('on')){
        console.log("on포함");

        allVideos.forEach(function(v){
            var video = v.querySelector('video');
            video.play();
        });

        document.querySelector('.play-all').innerHTML = "pause All"
        allPlay.classList.remove('on');
    }
    else{
        allVideos.forEach(function(v){
            var video = v.querySelector('video');
            video.pause();
        });
        document.querySelector('.play-all').innerHTML = "play All"
        allPlay.classList.add('on');
    }
})

