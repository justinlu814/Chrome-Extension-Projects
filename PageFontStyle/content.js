chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        $('.api').css('color', request.clickedColor);
    }
});