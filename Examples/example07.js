for(var i = 0; i < 5; i++) { 
		console.log(i); 
	};
        
        for(var i = 0; i < 5; i++) { 
		setTimeout(function() { 
			// console.log(window.i);
                        // console.log(window.i === i );
			console.log(i); 
		}, 100); 
	};