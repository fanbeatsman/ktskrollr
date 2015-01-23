
	function kt(dictionary){
		var startd = dictionary.startd || 0;
		var step = dictionary.step || 200;
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
		}
			);

		//	$(this).attr("data-"+f,"opacity:0;");
		//	$(this).attr("data-"+f+step,"opacity:1;");
	}