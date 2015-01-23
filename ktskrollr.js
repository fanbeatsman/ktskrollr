
	function kt(dictionary){
		var startd = dictionary.startd || 0;
		var step = dictionary.step || 200;
		var kt = 0;
		String.prototype.splice = function(idx,rem,s){
			return(this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
		};

		$(".kt").each(function(){
			var rawString = $(this).text();
			var length = rawString.length;
			rawString = "<span>" + rawString;
			var ptr = 0;
			var batchCtr = 0;
			while (ptr < rawString.length){
				if ((batchCtr > 5) && (rawString[ptr] == " ")){
					rawString = rawString.splice(ptr,0,"</span><span>");
					ptr = ptr + 12; //length of </span><span> - 1
					batchCtr = 0;
					console.log("success");
				}
				ptr++;
				batchCtr++;
			}


			console.log(rawString);
			$(this).html("");
			$(this).append(rawString);

			var f = parseInt(startd) + step; //f is a var that will loop over the spans and place skrollr data according to the given parameters 
			var g = f + step + step;
			$(".kt").each(function(){
		$(this).children("span").each(function(){

			$(this).attr("data-"+f,"opacity:0;");
			$(this).attr("data-"+g,"opacity:1;");
			f = f+step;
			g = g+step;
		});
		f = f+step+step;
		g = g+step+step;
});
		//	$(this).attr("data-"+f,"opacity:0;");
		//	$(this).attr("data-"+f+step,"opacity:1;");
		}
			);

		//	$(this).attr("data-"+f,"opacity:0;");
		//	$(this).attr("data-"+f+step,"opacity:1;");
	}