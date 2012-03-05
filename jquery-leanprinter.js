(function( $ ) {
	$.fn.leanPrinter = function(records) {
		var template = this.html();		
		if(records instanceof Array){
			function substitute(row){
				var html = new String(template);
				var i = 0;
				for(i in row){
					var tag = "{" + i + "}";
					html = html.replace(tag, row[i]);
				}
				return html;				
			}
			var output = [];
			for(i in records){
				output.push("\t"+substitute(records[i]));
			}
			var content =output.join("\r"); 
			this.html(content);
			return this;
		} else {
			return this;
		}
	};
})( jQuery );