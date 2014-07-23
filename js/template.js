$(document).ready(function() {
	// Add header
	var header = '<header>' +
			'<div class="home"><a href="/">pr0stats - pr0gramm.com Statistiken</a></div> ' +
			'<p class="meta"><a href="/motivation.html">Motivation</a> | ' +
							'<a href="/methodik.html">Methodik</a> | ' +
							'<a href="/analysen/index.html">Analysen</a> | ' +
							'auf <a class="prg-link" target="_blank" href="http://pr0gramm.com/user/pr0stats">pr0gramm</a> | ' +
							'auf <a href="https://github.com/pr0stats">github</a> | ' +
							'auf <a target="_blank" href="https://twitter.com/pr0stats">twitter</a></p>' +
		'</header>';
	$('body').prepend(header);
	
	// Add footer
	var footer = '<footer>' +
			'<div class="left-box"><a href="#">top</a></div>' +
			'<div class="bitcoin-donate center-box">' +
				'<div style="font-size:16px;margin:0 auto;width:300px" class="blockchain-btn"' +
					'data-address="1BmMRemMJ2mWS6Ppo92V2qEPxnWmH98vAe"' +
					'data-shared="false">' +
					'<div class="blockchain stage-begin">' +
						'<img class="bitcoin-logo" src="/img/we-love-bitcoins.png"/>' +
					'</div>' +
					'<div class="blockchain stage-loading" style="text-align:center">' +
						'<img src="https://blockchain.info//Resources/loading-large.gif"/>' +
					'</div>' +
					'<div class="blockchain stage-ready">' +
						'<p align="center">' +
							'Spendenadresse: <b>[[address]]</b>' +
						'</p>' +
						'<p align="center" class="qr-code"></p>' +
					'</div>' +
					'<div class="blockchain stage-paid">' +
						'Spende in Höhe von <b>[[value]] BTC</b> erhalten. Danke!' +
					'</div>' +
					'<div class="blockchain stage-error">' +
						'<font color="red">[[error]]</font>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="right-box"><a href="LICENSE">unlizensiert</a></div>' +
		'</footer>';
	$('body').append(footer);
});