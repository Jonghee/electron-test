(function(){
    // size controller 
    var __sideArea, __container, __docW, __docH;
    
    function _initialize(){
        __sideArea = document.querySelectorAll('.side')[0];
        __container = document.querySelectorAll('.container')[0];
        
        window.addEventListener('resize', _setSize);
        _setSize();
    }
    
    function _setSize(){
        var doc = document.documentElement;
        if( __docW == doc.clientWidth && __docH == doc.clientHeight ) return;
        __docW = doc.clientWidth;
        __docH = doc.clientHeight;
        
        __container.style.width = __docW - 200 - 40 + 'px';
    }
    
    window.addEventListener('DOMContentLoaded', _initialize);
})();