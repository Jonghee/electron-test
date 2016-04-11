(function($){
    const __apiKey = 'b040b735cc3dc2f4d08f7511418fd74e';
    
    var __side = require('./js/side'),
        __content = require('./js/content'),
        __container, __sideArea, __docW, __docH;
    
    function _initialize(){
        __side.init({
            target: '.side',
            data: ['cake','iPhone','flower','coffee','river','iMac','ncsoft','cloud']
        });
        __content.init({
            target: '.content'
        });
        
        __container = $('.container');
        __sideArea = $('.side');
        
        $(window).on('resize', _setSize).trigger('resize');
    }
    
    function _setSize(){
        var doc = $(window), pad = 40;
        if( __docW == doc.width() && __docH == doc.height() ) return;
        __docW = doc.width();
        __docH = doc.height();
        
        __container.width( __docW - 200 - pad ).height( __docH - pad );
        __sideArea.height(__docH);
    }
    
    $(document).ready(_initialize);
})(require('jquery'));