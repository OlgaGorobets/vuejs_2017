Vue.use(VeeValidate);
// functions
function f__validate(ev){
	this.$validator.validateAll().then(function(result){
		if(result){
			ev.target.submit();
		}
	});	
}

var topApp = new Vue({
	el: '#topApp',
	data: {
		toggle: false,
		name: '',
		code: ''
	},
	methods: {
		validateForm: f__validate
	} 	
});
var form2 = new Vue({
	el: '#setupForm',
	data: {
		name: '',
		email: '',
		site: ''
	},
	methods: {
		validateForm: f__validate
	}
});
var form3 = new Vue({
	el: '#orderForm',
	data: {
		name: '',
		email: '',
		message: ''
	},
	methods: {
		validateForm: f__validate
	}
});
var form4 = new Vue({
	el: '#orderBottomForm',
	data: {
		name: '',
		email: '',
		message: ''
	},
	methods: {
		validateForm: f__validate
	}
});
var tabs = new Vue({
	el: '#tabs',
	data: {
		active: 0
	},
	methods: {
		
	} 	
});
var toTop = new Vue({
	el: '#toTop',
	data: {
		visible: false
	},
	methods: {
		go: function(){
			$('html, body').animate({ scrollTop: 0 }, 'slow');			
		},
		handleScroll:function(){
			this.visible = $(window).scrollTop() > 500;
		}
	}, 	
	created:function() {
	  window.addEventListener('scroll', this.handleScroll);
	},
	destroyed:function() {
	  window.removeEventListener('scroll', this.handleScroll);
	}
});
