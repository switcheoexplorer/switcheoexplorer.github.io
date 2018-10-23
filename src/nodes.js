
// set value gauge

	node1();
	node2();
	node3();
	node4();
	node5();
	setInterval(setgauge, 3000);

// set gauge 2	
function setgauge () {
	
	var avgb = [vm.diff1, vm.diff2, vm.diff3, vm.diff4, vm.diff5];
	var avgt = [vm.counter1, vm.counter2, vm.counter3, vm.counter4, vm.counter5]
	var avg = [];	
				var sum = 0;
				for (var i = 0; i < 5; ++i) {	
					avg[i] = (avgb[i] - avgt[i]/30)/2;
					if (avg[i] < -3) avg[i] =  avg[i]*2; 
					if (avg[i] == null || avg[i] < -120) avg[i] = -120;
					sum += avg[i];
				};				
				var res = 120+sum/5; 
				if (res > 120) res = 120;
				
				gauges[2].value = res;
};

var urlb = "https://seed.o3node.org:10331"	

// NODE 1
async function node1 () {
	
		
		var block, height, time, ago, peers, mem, ver, best;
		var url = "https://seed1.switcheo.network:10331";
		
		await neo.node(url).getBestBlockHash().then(function (result) {
			bhash = result	
		}); 
		await neo.node(url).getBlock(bhash, 1).then(function (result) {
			height =  result.index; time = result.time;
		});  
		var x = moment().unix();
		var y = time;
		ago = x - y;

        var pollingPolicy = neo.service.createPollingPolicy(3000);
		
        vm.counter1 = ago;
		var dif = 1;
        
		setInterval((function () {				
            document.getElementById('count1').innerText =  (++vm.counter1) + " s ago"; 				
		}),1000);
			
            neo.node(url).poll(pollingPolicy).getBlockCount().notify(function (result) {
				if (height != result-1) {
					vm.counter1 = -1; height = result-1; 
				};				
          	});
				  
			neo.node(urlb).poll(pollingPolicy).getBlockCount().notify(function (result) {
				 best = result; vm.diff1 = height - best + 1;
				 if (vm.diff1 != dif) {
					dif = vm.diff1;
					document.getElementById('height1').innerText =  height + ' (' + vm.diff1 + ')';
					if (vm.diff1 < -3 || vm.counter1 > 120) {document.getElementById('nod1').style.color = "orange"} 
					else {document.getElementById('nod1').style.color = "limegreen"}
				 }
          	});	  
			
			neo.node(url).poll(pollingPolicy).getVersion().notify(function (result) {
				var ver = result.useragent;
				document.getElementById('ver1').innerText =  ver;
			});	  
				  
			neo.node(url).poll(pollingPolicy).getConnectionCount().notify(function (result) {
				peers = result;
				document.getElementById('peers1').innerText =  peers;
			});

			neo.node(url).poll(pollingPolicy).getRawMemPool().notify(function (result) {
				mem = result;
				document.getElementById('mem1').innerText =  mem.length;
          	});	
 				 
};
		
// NODE 2
async function node2 () {

		
		var block, height, time, ago, peers, mem, ver, best;
		var url = "https://seed2.switcheo.network:10331"
		
		await neo.node(url).getBestBlockHash().then(function (result) {
			bhash = result	
		 }); 
		await neo.node(url).getBlock(bhash, 1).then(function (result) {
			height =  result.index; time = result.time;
		  });  
		var x = moment().unix();
		var y = time;
		ago = x - y;

        var pollingPolicy = neo.service.createPollingPolicy(3000);

        vm.counter2 = ago;
		var dif = 1;
			
        setInterval((function () {	
             document.getElementById('count2').innerText = (++vm.counter2) + " s ago"; 
        }), 1000);
			
            neo.node(url).poll(pollingPolicy).getBlockCount().notify(function (result) {
				if (height != result-1) {
					vm.counter2 = -1; height = result-1; 
				};
          	});
				    
			neo.node(urlb).poll(pollingPolicy).getBlockCount().notify(function (result) {
				best = result; vm.diff2 = height - best+1; 
				if (vm.diff2 != dif) {
					dif = vm.diff2;
					document.getElementById('height2').innerText = height + ' (' + vm.diff2 + ')';
					if (vm.diff2 < -3 || vm.counter2 > 120) {document.getElementById('nod2').style.color = "orange"} 
					else {document.getElementById('nod2').style.color = "limegreen"}
				}
          	});
				  
			neo.node(url).poll(pollingPolicy).getVersion().notify(function (result) {
				var ver = result.useragent;
				document.getElementById('ver2').innerText = ver;
          	});	  
				  
			neo.node(url).poll(pollingPolicy).getConnectionCount().notify(function (result) {
				peers = result;
				document.getElementById('peers2').innerText =  peers;
          	});

			neo.node(url).poll(pollingPolicy).getRawMemPool().notify(function (result) {
				mem = result;
				document.getElementById('mem2').innerText =  mem.length;
          	});					  		 
				 
};
		
// NODE 3		
async function node3 () {

		
		var block, height, time, ago, peers, mem, ver, best;
		var url = "https://seed3.switcheo.network:10331"
		
		await neo.node(url).getBestBlockHash().then(function (result) {
			bhash = result	
		 }); 
		await neo.node(url).getBlock(bhash, 1).then(function (result) {
			height =  result.index; time = result.time;
		  });  
		var x = moment().unix();
		var y = time;
		ago = x - y;

        var pollingPolicy = neo.service.createPollingPolicy(3000);

        vm.counter3 = ago;
		var dif = 1;
			
        setInterval((function () {	
             document.getElementById('count3').innerText = (++vm.counter3) + " s ago"; 
        }), 1000);
			
            neo.node(url).poll(pollingPolicy).getBlockCount().notify(function (result) {
				if (height != result-1) {
					vm.counter3 = -1; height = result-1; 
				};
          	});
				   
			neo.node(urlb).poll(pollingPolicy).getBlockCount().notify(function (result) {
				best = result; vm.diff3 = height - best+1; 
				if (vm.diff3 != dif) {
					dif = vm.diff3;
					document.getElementById('height3').innerText = height + ' (' + vm.diff3 + ')';
					if (vm.diff3 < -3 || vm.counter3 > 120) {document.getElementById('nod3').style.color = "orange"} 
					else {document.getElementById('nod3').style.color = "limegreen"}
				}
          	});
				  
			neo.node(url).poll(pollingPolicy).getVersion().notify(function (result) {
				var ver = result.useragent;
				document.getElementById('ver3').innerText = ver;
          	});	  
				  
			neo.node(url).poll(pollingPolicy).getConnectionCount().notify(function (result) {
				peers = result;
				document.getElementById('peers3').innerText =  peers;
          	});

			neo.node(url).poll(pollingPolicy).getRawMemPool().notify(function (result) {
				mem = result;
				document.getElementById('mem3').innerText =  mem.length;
          	});					  		 
				 
};

// NODE 4
async function node4 () {

		
		var block, height, time, ago, peers, mem, ver, best;
		var url = "https://seed4.switcheo.network:10331"
		
		await neo.node(url).getBestBlockHash().then(function (result) {
			bhash = result	
		 }); 
		await neo.node(url).getBlock(bhash, 1).then(function (result) {
			height =  result.index; time = result.time;
		  });  
		var x = moment().unix();
		var y = time;
		ago = x - y;

        var pollingPolicy = neo.service.createPollingPolicy(3000);

        vm.counter4 = ago;
		var dif = 1;
			
        setInterval((function () {	
             document.getElementById('count4').innerText = (++vm.counter4) + " s ago"; 
        }), 1000);
			
            neo.node(url).poll(pollingPolicy).getBlockCount().notify(function (result) {
				if (height != result-1) {
					vm.counter4 = -1; height = result-1; 
				};				 
          	});
				    
			neo.node(urlb).poll(pollingPolicy).getBlockCount().notify(function (result) {
				best = result; vm.diff4 = height - best+1; 
				if (vm.diff4 != dif) {
					dif = vm.diff4;
					document.getElementById('height4').innerText = height + ' (' + vm.diff4 + ')';
					if (vm.diff4 < -3 || vm.counter4 > 120) {document.getElementById('nod4').style.color = "orange"} 
					else {document.getElementById('nod4').style.color = "limegreen"}				
				}
          	});				  

			neo.node(url).poll(pollingPolicy).getVersion().notify(function (result) {
				var ver = result.useragent;
				document.getElementById('ver4').innerText = ver;
          	});	  
				  
			neo.node(url).poll(pollingPolicy).getConnectionCount().notify(function (result) {
				peers = result;
				document.getElementById('peers4').innerText =  peers;
          	});

			neo.node(url).poll(pollingPolicy).getRawMemPool().notify(function (result) {
				mem = result;
				document.getElementById('mem4').innerText =  mem.length;
          	});					  		 
				 
};

// NODE 5
async function node5 () {


		var block, height, time, ago, peers, mem, ver, best;
		var url = "https://seed5.switcheo.network:10331"
		
		await neo.node(url).getBestBlockHash().then(function (result) {
			bhash = result	
		 }); 
		await neo.node(url).getBlock(bhash, 1).then(function (result) {
			height =  result.index; time = result.time;
		  });  
		var x = moment().unix();
		var y = time;
		ago = x - y;

        var pollingPolicy = neo.service.createPollingPolicy(3000);

        vm.counter5 = ago;
		var dif = 1;
			
        setInterval((function () {	
             document.getElementById('count5').innerText = (++vm.counter5) + " s ago"; 
        }), 1000);
			
            neo.node(url).poll(pollingPolicy).getBlockCount().notify(function (result) {
				if (height != result-1) {
					vm.counter5 = -1; height = result-1; 
				};
          	});
				  
  
			neo.node(urlb).poll(pollingPolicy).getBlockCount().notify(function (result) {
				best = result; vm.diff5 = height - best+1; 
				if (vm.diff5 != dif) {
					dif = vm.diff5;
					document.getElementById('height5').innerText = height + ' (' + vm.diff5 + ')';
					if (vm.diff5 < -3 || vm.counter5 > 120) {document.getElementById('nod5').style.color = "orange"} 
					else {document.getElementById('nod5').style.color = "limegreen"}				
				}
          	});
				  

			neo.node(url).poll(pollingPolicy).getVersion().notify(function (result) {
				var ver = result.useragent;
				document.getElementById('ver5').innerText = ver;
          	});	  
				  
			neo.node(url).poll(pollingPolicy).getConnectionCount().notify(function (result) {
				peers = result;
				document.getElementById('peers5').innerText =  peers;
          	});

			neo.node(url).poll(pollingPolicy).getRawMemPool().notify(function (result) {
				mem = result;
				document.getElementById('mem5').innerText =  mem.length;
          	});					  		 
				 
};		
				