(function(){
    var $ = require('jquery'),
        dom;
    
    function init(options){
        dom = $(options.target);
    }
    
    function show(word){
        getData(word, 1, render);
    }
    
    function render(list){
        dom.empty();
        $.each(list, function(i,item){
            $('<img>').attr('src', item.image).appendTo(dom).width(100).height(100);
        });
    }
    
    function getData(keyword, page, callback){
        $.ajax({
            url: 'https://apis.daum.net/search/image?apikey=b040b735cc3dc2f4d08f7511418fd74e&q='+ keyword +'&output=json&result=20&pageno=' + page,
            method: 'jsonp'
        }).success(function(res){
            if( typeof callback != 'function' ) return;
            callback.call(callback, res.channel.item);
        });
    }
    
    exports.init = init;
    exports.show = show;
})()