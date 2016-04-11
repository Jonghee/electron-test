(function(){
    var $ = require('jquery');
    var cont = require('../js/content');
    var dom, data;
    
    exports.init = function(options){
        var self = this;
        dom = $(options.target);
        data = options.data;
        
        self.render();
        
        dom.find('a').eq(0).trigger('click');
    };
    exports.render = function(){
        var self = this;
        var htmlString = '<ul class="tagList">';
        $.each(data, function(i,item){
            htmlString += '<li><a href="#'+ item +'" data-index="'+ i +'">'+ item +'</a></li>';
        });
        htmlString += '</ul>';
        
        dom.html(htmlString);
        
        dom.find('a').on('click', function(e){
            e.preventDefault();
            self.select( this.dataset.index );
        });
    };
    exports.select = function(num){
        dom.find('a').removeClass('selected').eq(num).addClass('selected');
        cont.show( dom.find('a').eq(num).text() );
    };
    exports.setSize = function(h){};
})();