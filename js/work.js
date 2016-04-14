'use strict';

(function($){
    const __apiKey = 'b040b735cc3dc2f4d08f7511418fd74e';
	
    // size controller
    var __sideArea, __container, __cont, __docW, __docH;
    
	function _initialize(){
		__sideArea = $('.side');
		__container = $('.container');
		__cont = $('.content');

		// event handler
		$(window).on('resize', _setSize).trigger('resize');
		__sideArea.find('a').on('click', function(){
			__sideArea.find('a').removeClass('selected').eq( $(this).parent().index() ).addClass('selected');
			_getData($(this).text(), 1, _render);
		});

		// initialize
		__sideArea.find('a').eq(0).trigger('click');
	}

	function _render(list){
		__cont.empty();
		$.each(list, function(i,item){
			$('<img>').attr('src', item.image).appendTo(__cont).width(100).height(100);
		});
	}

	function _setSize(){
		var doc = $(window), pad = 40;
		if( __docW == doc.width() && __docH == doc.height() ) return;
		__docW = doc.width();
		__docH = doc.height();

		__container.width( __docW - 200 - pad ).height( __docH - pad );
		__sideArea.height(__docH);
	}

	function _getData(keyword, page, callback){
		$.ajax({
			url: 'https://apis.daum.net/search/image?apikey=b040b735cc3dc2f4d08f7511418fd74e&q='+ keyword +'&output=json&result=20&pageno=' + page,
			method: 'jsonp'
		}).success(function(res){
			if( typeof callback != 'function' ) return;
			callback.call(callback, res.channel.item);
		});
	}
    
	$(document).ready(_initialize);
})(require('jquery'));