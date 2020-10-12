
if (matchMedia) {
	const mq = window.matchMedia("(max-width: 768px)");
	mq.addListener(MobileChange);
	MobileChange(mq);
}

if (matchMedia) {
	const mq = window.matchMedia("(min-width: 768px)");
	mq.addListener(MediumChange);
	MediumChange(mq);
}

function MediumChange(mq){
  if (mq.matches) {
	$("#top-story").appendTo("#top-story-wrapper>#top-story-original");
    $("#debate-backup>#d-o-wrapper").appendTo("#debate-original");
	$("#more-stories-backup>section").appendTo("#more-stories-original");


	/* $("#top-story").appendTo("#top-story-wrapper>#top-story-original"); */

  }
}

function MobileChange(mq){
  if (mq.matches) {
	$("#top-story").appendTo("#feature>#top-story-backup");
	$("#debate-original>#d-o-wrapper").appendTo("#debate-backup");
	$("#more-stories-original>section").appendTo("#more-stories-backup");

  }
}





