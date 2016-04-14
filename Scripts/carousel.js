var activeItem;

var carouselImageMinWidth = 800;
var carouselImageMinHeight = 300;

var smallestBox = {width: 320, height: 300};

var screenSizeDifference,
	screenSizeQuotients;

var image1 = {x:306, y: 0};

var carousel1X = 414,
	carousel1Y = 0;

// function repositionActiveImage()
// {
// 	var activeItem = $('.carousel-inner').children('.active'),
// 		carouselImage = activeItem.children('.carouselImage');

// 	carouselImage.css({left: carousel1X, top: carousel1Y});
//}

function setCarouselSection()
{
	repositionActiveImage();
}

function repositionActiveImage()
{
	var activeItem = $('.carousel-inner').children('.active'),
		// carouselImage = activeItem.children('.carouselImage');

		carouselImage = activeItem.children()[0];

	var sdf = activeItem.width();

	if (carouselImage.width == carouselImageMinWidth)
	{
		var widthDifferece = carouselImageMinWidth - screenWidth;
		var newLeft = widthDifferece * screenSizeQuotients.width;

		carouselImage = activeItem.children('.carouselImage');
		activeItem.css({left: newLeft * -1});

		var asd = 1;
		//carouselImage.offsetLeft = newLeft;
	}

	// if (carouselImage.style.height == carouselImageMinHeight)
	// {
	// 	var heightDifferece = carouselImageMinHeight - screenHeight;
	// 	var newTop = heightDifferece * screenSizeQuotients.height;

	// 	//carouselImage.css({top: newTop});
	// }
}

function refreshCarouselVariables()
{
	widthDifferece = carouselImageMinWidth - smallestBox.width,
	heightDifference = carouselImageMinHeight - smallestBox.height;

	screenSizeDifference = {width: widthDifferece, height: heightDifference};

	widthQuotient = image1.x / screenSizeDifference.width;
	heightQuotient = image1.y / screenSizeDifference.height;

	screenSizeQuotients = {width: widthQuotient, height: heightQuotient};

}