/*
 * Author - Tedir Ghazali
 * Version - 0.0.1
 * Release - 5 December 2017
 * Licensed under the Apache License, Version 2.0
 */

(function($){
    
    $.fn.titleSeoUrl = function(options){
        var settings = $.extend({
            domain: 'http://kautube.com/',
            subdir: 'category/',
            separator: '-',
            special: {  
                ą:"a",Ą:"A",ę:"e",Ę:"E",ó:"o",Ó:"O",ś:"s",Ś:"S",ł:"l",Ł:"L",
				ż:"z",Ż:"Z",ź:"z",Ź:"Z",ć:"c",Ć:"C",ń:"n",Ń:"N",č:"c",ď:"d",
				ň:"n",ř:"r",š:"s",ť:"t",Š:"S",Œ:"O",Ž:"Z",š:"s",œ:"o",ž:"z",
				Ÿ:"Y",ÿ:"y",µ:"U",À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Æ:"A",
				Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",
				Ñ:"N",Ò:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",
				Ý:"Y",ß:"s",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",æ:"a",ç:"c",
				è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"o",ñ:"n",
				ò:"o",ô:"o",õ:"o",ö:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",
				'¥':"Y",'&':"and"
            },
            urlbox: '#txturl',
            format: '.html',
            max: ''
        }, options);
        
        return this.each(function() {
            $(this).keyup(function(){
                var editmax = '', txtmax= [], txtspe= [];
                var edittxt = $(this).val();
                for( var i = 0, j = edittxt.length; i < j; i++ ){
					var c = edittxt.charAt(i);
					if( settings.special.hasOwnProperty(edittxt.charAt(i))){
						txtspe.push(settings.special[c]);
                    } else{
						txtspe.push(c);
                    }
				}
                var mytxt = txtspe.join('');
                var repsep = mytxt.replace(/^\s+|\s+$/g, "")
								.replace(/[_|\s]+/g, settings.separator )
								.replace(/[^a-zA-z\u0400-\u04FF0-9-%-]+/g, "")
								.replace(/[-]+/g, settings.separator )
								.replace(/^-+|-+$/g, "")
								.replace(/[-]+/g, settings.separator );
                if(settings.max != '' && mytxt.length > settings.max){
                    editmax = repsep.substring(0, settings.max);
                    txtmax = editmax.split(settings.separator);
                    txtmax.pop();
                    editmax = txtmax.join(settings.separator);
                } else{
                    editmax = repsep;
                }
                var txt = settings.domain + settings.subdir + editmax + settings.format;
                $(settings.urlbox).html(txt);
            });
        });
        
    }
    
})(jQuery);