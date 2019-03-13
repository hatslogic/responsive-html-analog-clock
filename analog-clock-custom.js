	$(document).ready(function(){

		// Customize clock
		var clockBgColor = "#272822";		/*Change clock background colour*/
		var clockBorderColor = "#000";		/*Change clock border color*/
		var dialColor = "#fff";				/*Change clock dial color*/
		var centerColor = "red";			/*Change clock center round color*/
		var hoursColor = "#fff";			/*Change clock hours needle color*/
		var minutesColor = "#fff";			/*Change clock minutes needle color*/
		var secondsColor = "red";			/*Change clock seconds needle color*/


		$( ".analog-clock" ).append( "<div class='clock-container'><div class='clock-dial'><div class='overlay'></div><div class='hours'></div><div class='minutes'></div><div class='seconds'></div><div class='center'></div></div>");

		for(var i=0; i<12; i++){
			$(".clock-dial").prepend("<span></span>");
		}

		var dialLinesAngle = 30;
		$(".clock-dial span").each(function() {
			$(this).css({"transform":"rotate("+dialLinesAngle+"deg)","transform-origin":"center bottom"});
			dialLinesAngle += 30;
		});

		var currentDate = new Date();
		var hour = currentDate.getHours();
		var minute = currentDate.getMinutes()*6;
		var second = currentDate.getSeconds()*6;
		var hourDifference = (minute/360)*(30);
		var hourDegree = (hour*30)+(hourDifference);
		setInterval(function(){			
			$(".seconds").css({"transform":"rotate("+second+"deg)","transform-origin":"center bottom"});
			$(".minutes").css({"transform":"rotate("+minute+"deg)","transform-origin":"center bottom"});
			$(".hours").css({"transform":"rotate("+hourDegree+"deg)","transform-origin":"center bottom"});
			second += 6;
			minute += (6/60);
			hourDegree += (6/360);
		},1000);
		
		var clockWidth = "100%";
		$(".clock-container").css("width", clockWidth);
		$(".overlay").css("background-color", clockBgColor);
		$(".clock-dial").css("background-color", clockBorderColor);
		$(".clock-dial>span").css("background-color", dialColor);
		$(".center").css("background-color", centerColor);
		$(".hours").css("background-color", hoursColor);
		$(".minutes").css("background-color", minutesColor);
		$(".seconds").css("background-color", secondsColor);

		function reSize(){
			var width = $('.analog-clock').parent().width();
			var height = $('.analog-clock').parent().height();
			var heightAspectRatio = (height/width)*100;
			var clockWidth = $(".clock-container").width();
			$(".clock-container").height(clockWidth);

			if(width > height){
				$(".clock-container").css("width",heightAspectRatio + "%");
				var clockWidth = $(".clock-container").width();
				$(".clock-container").height(clockWidth);
			}
			else{
				$(".clock-container").height(clockWidth);
			}
		}
		reSize();
  		$(window).resize(function(){
			reSize();
		});
	});