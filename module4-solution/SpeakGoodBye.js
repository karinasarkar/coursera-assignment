(function(window){
    var byeSpeaker={};
    byeSpeaker.speak=function(names){
        console.log("Good Bye" + " " +names );
    }
    window.byeSpeaker=byeSpeaker;
})(window);
