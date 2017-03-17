var id = location.href.split('?id=').pop();
var windowWidth = $(window).width();
$.get('/ajax/book?id=' + id, function(d) {
	new Vue({
		el: '#app',
		data: {
			d: d,
			screen_width: windowWidth
		},
		methods: {
			readBook: function() {
				location.href = "/reader";
			}
		}
	})
}, 'json');