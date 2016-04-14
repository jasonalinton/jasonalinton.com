window.onload = function () 
{
	initializeVariables();

	setCarouselSection();
	setIntroSection();
	setInventorySection();

	isLooaded = true;
};

$(window).resize(function() 
{
	refreshVariables();

	setCarouselSection();
	setIntroSection();
	setInventorySection();

	// $(document).scrollTop(documentTopPositon + "px");
});

function initializeVariables()
{
	refreshVariables();

	introImgInitialWidth = $('#inventory-pentagon-img').outerWidth();
	introImgInitialHeight = $('#inventory-pentagon-img').outerHeight();

	introImgInitialProportion = introImgInitialWidth / introImgInitialHeight;
}

function refreshVariables()
{

	refreshScreenVariables();
	refreshCarouselVariables();

	documentTopPositon = $(document).scrollTop();
}

function refreshScreenVariables()
{
	screenWidth = $(window).width(); // Get width of browser viewport
	screenHeight = $(window).height(); // Get height of browser viewport
	screenProportion = screenWidth / screenHeight;
}

function setIntroSection()
{
	var introSectionHeight = $('#intro-section').height(),
		introHeaderOuterHeight = $('#intro-section-header').outerHeight(),
		introImgHeight = screenHeight - introHeaderOuterHeight;

		introImageProportion = screenWidth / introImgHeight;

		$('#inventory-pentagon-img').css('max-width', 'initial');
		$('#inventory-pentagon-img').css('max-height', 'initial');

	if (introImageProportion > introImgInitialProportion)
	{
		$('#inventory-pentagon-img').width('auto');
		$('#inventory-pentagon-img').height(introImgHeight);

		$('#intro-section').outerHeight('100vh');
		$('#intro-img').height(introImgHeight);
		
		if ($('#inventory-pentagon-img').height() < introHeaderOuterHeight)
		{
			$('#inventory-pentagon-img').height(introHeaderOuterHeight);
			$('#intro-section').outerHeight('auto');
			$('#intro-img').height('auto');

			var kjh = $('#intro-section').outerWidth();
			$('#inventory-pentagon-img').css('max-width', screenWidth);
			$('#inventory-pentagon-img').css('max-height', $('#inventory-pentagon-img').width() / introImgInitialProportion);
		}
		
	}
	// else if (introImageProportion < introImgInitialProportion && $('#intro-img').height() >= screenHeight && introImageProportion > 0)
	// {
	else if (introImageProportion < introImgInitialProportion && introImageProportion > 0)
	{
		$('#intro-img').height('auto');
		$('#intro-section').height('auto');

		$('#inventory-pentagon-img').width('100%');
		$('#inventory-pentagon-img').height('auto');

		$('#inventory-pentagon-img').css('min-height', 'initial');
	}


}

function setInventorySection()
{
	if (screenWidth > extraSmallWidth)
	{
		// inventoryRowHeight = screenHeight / 2.5; // Set row height to half browser viewport height
		inventoryRowHeight = $(".inventory-row").height(); // Set row height to half browser viewport height

		$(".inventory-row").height(inventoryRowHeight);
	}
	else
	{
		$(".inventory-row").height('auto');
	}

	setSocialRow();
	setEmotionalRow();
	setMentalRow();
}

function setSocialRow()
{
	/* Set Sizes */
	socialSilhouetteImgHeight = inventoryRowHeight;
	socialBackgroundHeight = inventoryRowHeight;

	$(".social-silhouette-img").height(socialSilhouetteImgHeight);
	$("#social-waves-img").height(socialBackgroundHeight);

	/* Set Positions */
	socialRowBackgroundLeft = (-1) * (($("#social-waves-img").width() - $("#social-row").width()) / 2);

	$("#social-waves-img").css({left: socialRowBackgroundLeft + "px"});
}

function setEmotionalRow()
{
	$("#emotional-masks-img").outerHeight(inventoryRowHeight);

	$("#emotional-row h1").outerHeight(inventoryRowHeight / 2);
	$("#emotional-row h2").outerHeight(inventoryRowHeight / 2);
}

function setMentalRow()
{
	$("#brain-img").outerHeight(inventoryRowHeight);
	$('#brain-img').css('max-width', screenWidth);	

	$("#mental-row h1").outerHeight(inventoryRowHeight / 2);
	$("#mental-row h2").outerHeight(inventoryRowHeight / 2);
}

