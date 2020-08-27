(function(window){
    
    var helloSpeaker={};
    helloSpeaker.speak =function(names){
        console.log("Hello" + " " + names );
    }
    window.helloSpeaker = helloSpeaker;
})(window);
