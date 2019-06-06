var view = {
	init: function(){
		this.setHeightMainContainer();
	},

	setHeightMainContainer: function(){
		var header = document.getElementsByClassName("header")[0];
		var headerHeight = window.getComputedStyle(header).height;
		var mainContainer = document.getElementsByClassName("main-container")[0];
		mainContainer.style.height = window.innerHeight - parseInt(headerHeight) + "px";
	},
};

var octopus = {
	init(){
		view.init();
	}

	
};

octopus.init();

function setProperty(input,display){
	console.log(document.getElementsByName(input)[0])
	document.getElementsByClassName(display)[0].innerText = document.getElementsByClassName(input)[0].value;
}

var imageSelector = document.getElementsByClassName('input-container__input-profile-picture')[0];
imageSelector.addEventListener('change',function(){
	console.log("1245");
	if(this.files && this.files[0]){
		var image = document.getElementsByClassName('display-container__display-profile-picture')[0];
		image.setAttribute("src",URL.createObjectURL(this.files[0]));
	}
});

