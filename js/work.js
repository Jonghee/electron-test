(function(){
    // app start
    window.addEventListener('DOMContentLoaded', function(){
        var sc = document.createElement('script');
        sc.setAttribute('src', 'js/jquery.js');
        sc.addEventListener('load', _initialize);
        document.head.appendChild(sc);
    });
    
    // size controller 
    var __sideArea, __container, __docW, __docH;
    
    function _initialize(){
        __sideArea = $('.side');
        __container = $('.container');
        
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
})();