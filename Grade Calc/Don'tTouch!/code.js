//title screen

onEvent("getStarted", "click", function() {
  console.log("getStarted clicked!");
  setScreen("mathScreen");

});
//Variables
var clicks;
var TEST = 0;
var TEST2 = 0;
var TEST3 = 0;
var TEST4 = 0;
var TEST5 = 0;
var TEST6 = 0;
var catp1 = 0;
var catp2 = 0;
var catp3 = 0;
var catp4 = 0;
var catp5 = 0;
var catp6 = 0;
var catp7 = 0;
var catp8 = 0;
var Divisor = 0;
//Var for Grade Screen 1
var gSr1;
var gSr2;
var gSr3;
var gSr4;
var gSr5;
var gSr6;
var gSr7;
var gSr8;
var gSr9;
var gSr10;
var gSr11;
var gSr12;
var gSr13;
var gSr14;
var gSr15;
var gSr16;
var gS1Avg = 0;
var cat1Worth = 0;
//Var for Grade Screen 2
var gS2r1;
var gS2r2;
var gS2r3;
var gS2r4;
var gS2r5;
var gS2r6;
var gS2r7;
var gS2r8;
var gS2r9;
var gS2r10;
var gS2r11;
var gS2r12;
var gS2r13;
var gS2r14;
var gS2r15;
var gS2r16;
var gS2Avg = 0;
var cat2Worth = 0;
//Var Grade Screen 2 ex
var fat1;
var fat2;
var fat3;
var fat4;
var fat5;
var fat6;
var fat7;
var fat8;
var fat9;
var fat10;
var fat11;
var fat12;
var fat13;
var fat14;
var fat15;
var fat16;
//Var Grade Screen 3
var gS3r1;
var gS3r2;
var gS3r3;
var gS3r4;
var gS3r5;
var gS3r6;
var gS3r7;
var gS3r8;
var gS3r9;
var gS3r10;
var gS3r11;
var gS3r12;
var gS3r13;
var gS3r14;
var gS3r15;
var gS3r16;
var gS3Avg = 0;
var cat3Worth = 0;
//Var Grade Screen 4
var gS4r1;
var gS4r2;
var gS4r3;
var gS4r4;
var gS4r5;
var gS4r6;
var gS4r7;
var gS4r8;
var gS4r9;
var gS4r10;
var gS4r11;
var gS4r12;
var gS4r13;
var gS4r14;
var gS4r15;
var gS4r16;
var gS4Avg = 0;
var cat4Worth = 0;
//Var Grade Screen 5
var gS5r1;
var gS5r2;
var gS5r3;
var gS5r4;
var gS5r5;
var gS5r6;
var gS5r7;
var gS5r8;
var gS5r9;
var gS5r10;
var gS5r11;
var gS5r12;
var gS5r13;
var gS5r14;
var gS5r15;
var gS5r16;
var gS5Avg = 0;
var cat5Worth = 0;
//Var Grade Screen 6
var gS6r1;
var gS6r2;
var gS6r3;
var gS6r4;
var gS6r5;
var gS6r6;
var gS6r7;
var gS6r8;
var gS6r9;
var gS6r10;
var gS6r11;
var gS6r12;
var gS6r13;
var gS6r14;
var gS6r15;
var gS6r16;
var gS6Avg = 0;
var cat6Worth = 0;

var fGrade = 0;

//Functions
function reset() {
  setText("dropdown1", "-Select-");
  setText("dropdown2", "-Select-");
  setText("dropdown3", "-Select-");
  setText("dropdown4", "-Select-");
  setText("dropdown5", "-Select-");
  setText("dropdown6", "-Select-");
  setText("dropdown7", "-Select-");
  setText("dropdown8", "-Select-");
  setText("text_area1", "");
  setText("text_area2", "");
  setText("text_area3", "");
  setText("text_area4", "");
  setText("text_area5", "");
  setText("text_area6", "");
  setText("text_area7", "");
  setText("text_area8", "");
  setText("text_input1", "");
  setText("text_input2", "");
  setText("text_input3", "");
  setText("text_input4", "");
  setText("text_input5", "");
  setText("text_input6", "");
  setText("text_input7", "");
  setText("text_input8", "");
  catp1 = 0;
  catp2 = 0;
  catp3 = 0;
  catp4 = 0;
  catp5 = 0;
  catp6 = 0;
  TEST = 0;
  TEST2 = 0;
  TEST3 = 0;
  TEST4 = 0;
  TEST5 = 0;
  TEST6 = 0;
  hideElement("MathWrong");
  hideSpace();
  hideSpace0();
  hideSpace1();
  hideSpace2();
  hideSpace3();
  clicks = 0;
  fGrade = 0;
}
function reset2() {
  Di1 = 0;
  gS1Avg = 0;
  setChecked("checkbox1", false);
  setChecked("checkbox2", false);
  setChecked("checkbox3", false);
  setChecked("checkbox4", false);
  setChecked("checkbox5", false);
  setChecked("checkbox6", false);
  setChecked("checkbox7", false);
  setChecked("checkbox8", false);
  setChecked("checkbox9", false);
  setChecked("checkbox10", false);
  setChecked("checkbox11", false);
  setChecked("checkbox12", false);
  setChecked("checkbox13", false);
  setChecked("checkbox14", false);
  setChecked("checkbox15", false);
  setChecked("checkbox16", false);
  setText("text_input1pG", "");
  setText("text_input2pG", "");
  setText("text_input3pG", "");
  setText("text_input4pG", "");
  setText("text_input5pG", "");
  setText("text_input6pG", "");
  setText("text_input7pG", "");
  setText("text_input8pG", "");
  setText("text_input9pG", "");
  setText("text_input10pG", "");
  setText("text_input11pG", "");
  setText("text_input12pG", "");
  setText("text_input13pG", "");
  setText("text_input14pG", "");
  setText("text_input15pG", "");
  setText("text_input16pG", "");
  setText("text_input17pG", "");
  setText("text_input18pG", "");
  setText("text_input19pG", "");
  setText("text_input20pG", "");
  setText("text_input21pG", "");
  setText("text_input22pG", "");
  setText("text_input23pG", "");
  setText("text_input24pG", "");
  setText("text_input25pG", "");
  setText("text_input26pG", "");
  setText("text_input27pG", "");
  setText("text_input28pG", "");
  setText("text_input29pG", "");
  setText("text_input30pG", "");
  setText("text_input31pG", "");
  setText("text_input32pG", "");
}
function reset3() {
  Di2 = 0;
  gS2Avg = 0;
  setChecked("checkbox17", false);
  setChecked("checkbox18", false);
  setChecked("checkbox19", false);
  setChecked("checkbox20", false);
  setChecked("checkbox21", false);
  setChecked("checkbox22", false);
  setChecked("checkbox23", false);
  setChecked("checkbox24", false);
  setChecked("checkbox25", false);
  setChecked("checkbox26", false);
  setChecked("checkbox27", false);
  setChecked("checkbox28", false);
  setChecked("checkbox29", false);
  setChecked("checkbox30", false);
  setChecked("checkbox31", false);
  setChecked("checkbox32", false);
  setText("text_input33pG", "");
  setText("text_input34pG", "");
  setText("text_input35pG", "");
  setText("text_input36pG", "");
  setText("text_input37pG", "");
  setText("text_input38pG", "");
  setText("text_input39pG", "");
  setText("text_input40pG", "");
  setText("text_input41pG", "");
  setText("text_input42pG", "");
  setText("text_input43pG", "");
  setText("text_input44pG", "");
  setText("text_input45pG", "");
  setText("text_input46pG", "");
  setText("text_input47pG", "");
  setText("text_input48pG", "");
  setText("text_input49pG", "");
  setText("text_input50pG", "");
  setText("text_input51pG", "");
  setText("text_input52pG", "");
  setText("text_input53pG", "");
  setText("text_input54pG", "");
  setText("text_input55pG", "");
  setText("text_input56pG", "");
  setText("text_input57pG", "");
  setText("text_input58pG", "");
  setText("text_input59pG", "");
  setText("text_input60pG", "");
  setText("text_input61pG", "");
  setText("text_input62pG", "");
  setText("text_input63pG", "");
  setText("text_input64pG", "");
}
function reset4() {
  Di3 = 0;
  gS3Avg = 0;
  setChecked("checkbox33", false);
  setChecked("checkbox34", false);
  setChecked("checkbox35", false);
  setChecked("checkbox36", false);
  setChecked("checkbox37", false);
  setChecked("checkbox38", false);
  setChecked("checkbox39", false);
  setChecked("checkbox40", false);
  setChecked("checkbox41", false);
  setChecked("checkbox42", false);
  setChecked("checkbox43", false);
  setChecked("checkbox44", false);
  setChecked("checkbox45", false);
  setChecked("checkbox46", false);
  setChecked("checkbox47", false);
  setChecked("checkbox48", false);
  setText("text_input65pG", "");
  setText("text_input66pG", "");
  setText("text_input67pG", "");
  setText("text_input68pG", "");
  setText("text_input69pG", "");
  setText("text_input70pG", "");
  setText("text_input71pG", "");
  setText("text_input72pG", "");
  setText("text_input73pG", "");
  setText("text_input74pG", "");
  setText("text_input75pG", "");
  setText("text_input76pG", "");
  setText("text_input77pG", "");
  setText("text_input78pG", "");
  setText("text_input79pG", "");
  setText("text_input80pG", "");
  setText("text_input81pG", "");
  setText("text_input82pG", "");
  setText("text_input83pG", "");
  setText("text_input84pG", "");
  setText("text_input85pG", "");
  setText("text_input86pG", "");
  setText("text_input87pG", "");
  setText("text_input88pG", "");
  setText("text_input89pG", "");
  setText("text_input90pG", "");
  setText("text_input91pG", "");
  setText("text_input92pG", "");
  setText("text_input93pG", "");
  setText("text_input94pG", "");
  setText("text_input95pG", "");
  setText("text_input96pG", "");
}
function reset5() {
  Di4 = 0;
  gS4Avg = 0;
  setChecked("checkbox49", false);
  setChecked("checkbox50", false);
  setChecked("checkbox51", false);
  setChecked("checkbox52", false);
  setChecked("checkbox53", false);
  setChecked("checkbox54", false);
  setChecked("checkbox55", false);
  setChecked("checkbox56", false);
  setChecked("checkbox57", false);
  setChecked("checkbox58", false);
  setChecked("checkbox59", false);
  setChecked("checkbox60", false);
  setChecked("checkbox61", false);
  setChecked("checkbox62", false);
  setChecked("checkbox63", false);
  setChecked("checkbox64", false);
  setText("gig1", "");
  setText("gig2", "");
  setText("gig3", "");
  setText("gig4", "");
  setText("gig5", "");
  setText("gig6", "");
  setText("gig7", "");
  setText("gig8", "");
  setText("gig9", "");
  setText("gig10", "");
  setText("gig11", "");
  setText("gig12", "");
  setText("gig13", "");
  setText("gig14", "");
  setText("gig15", "");
  setText("gig16", "");
  setText("gig17", "");
  setText("gig18", "");
  setText("gig19", "");
  setText("gig20", "");
  setText("gig21", "");
  setText("gig22", "");
  setText("gig23", "");
  setText("gig24", "");
  setText("gig25", "");
  setText("gig26", "");
  setText("gig27", "");
  setText("gig28", "");
  setText("gig29", "");
  setText("gig30", "");
  setText("gig31", "");
  setText("gig32", "");
}
function reset6() {
  setChecked("ch1", false);
  setChecked("ch2", false);
  setChecked("ch3", false);
  setChecked("ch4", false);
  setChecked("ch5", false);
  setChecked("ch6", false);
  setChecked("ch7", false);
  setChecked("ch8", false);
  setChecked("ch9", false);
  setChecked("ch10", false);
  setChecked("ch11", false);
  setChecked("ch12", false);
  setChecked("ch13", false);
  setChecked("ch14", false);
  setChecked("ch15", false);
  setChecked("ch16", false);
  setText("gig1ex", "");
  setText("gig2ex", "");
  setText("gig3ex", "");
  setText("gig4ex", "");
  setText("gig5ex", "");
  setText("gig6ex", "");
  setText("gig7ex", "");
  setText("gig8ex", "");
  setText("gig9ex", "");
  setText("gig10ex", "");
  setText("gig11ex", "");
  setText("gig12ex", "");
  setText("gig13ex", "");
  setText("gig14ex", "");
  setText("gig15ex", "");
  setText("gig16ex", "");
  setText("gig17ex", "");
  setText("gig18ex", "");
  setText("gig19ex", "");
  setText("gig20ex", "");
  setText("gig21ex", "");
  setText("gig22ex", "");
  setText("gig23ex", "");
  setText("gig24ex", "");
  setText("gig25ex", "");
  setText("gig26ex", "");
  setText("gig27ex", "");
  setText("gig28ex", "");
  setText("gig29ex", "");
  setText("gig30ex", "");
  setText("gig31ex", "");
  setText("gig32ex", "");
}
function reset7() {
  Di5 = 0;
  gS5Avg = 0;
  setChecked("checkbox65", false);
  setChecked("checkbox66", false);
  setChecked("checkbox67", false);
  setChecked("checkbox68", false);
  setChecked("checkbox69", false);
  setChecked("checkbox70", false);
  setChecked("checkbox71", false);
  setChecked("checkbox72", false);
  setChecked("checkbox73", false);
  setChecked("checkbox74", false);
  setChecked("checkbox75", false);
  setChecked("checkbox76", false);
  setChecked("checkbox77", false);
  setChecked("checkbox78", false);
  setChecked("checkbox79", false);
  setChecked("checkbox80", false);
  setText("gig33", "");
  setText("gig34", "");
  setText("gig35", "");
  setText("gig36", "");
  setText("gig37", "");
  setText("gig38", "");
  setText("gig39", "");
  setText("gig40", "");
  setText("gig41", "");
  setText("gig42", "");
  setText("gig43", "");
  setText("gig44", "");
  setText("gig45", "");
  setText("gig46", "");
  setText("gig47", "");
  setText("gig48", "");
  setText("gig49", "");
  setText("gig50", "");
  setText("gig51", "");
  setText("gig52", "");
  setText("gig53", "");
  setText("gig54", "");
  setText("gig55", "");
  setText("gig56", "");
  setText("gig57", "");
  setText("gig58", "");
  setText("gig59", "");
  setText("gig60", "");
  setText("gig61", "");
  setText("gig62", "");
  setText("gig63", "");
  setText("gig64", "");
}

function showSpace0() {
 showElement("dropdown4");
 showElement("label5");
 showElement("text_input4");
 showElement("text_area4");
 showElement("label152");
 showElement("lolxD4");
 showElement("Equal1");
 showElement("lolxDRawr4");
 showElement("per1");
 hideElement("Dashline1");
}
function showSpace() {
  showElement("dropdown5");
  showElement("label6");
  showElement("text_input5");
  showElement("text_area5");
  showElement("label163");
  showElement("lolxD5");
  showElement("Equal2");
  showElement("lolxDRawr5");
  showElement("per2");
  hideElement("Dashline2");
}
function showSpace1() {
  showElement("dropdown6");
  showElement("label7");
  showElement("text_input6");
  showElement("text_area6");
  showElement("label164");
  showElement("lolxD6");
  showElement("Equal3");
  showElement("lolxDRawr6");
  showElement("per3");
  hideElement("Dashline3");
}
function showSpace2() {
  showElement("dropdown7");
  showElement("label8");
  showElement("text_input7");
  showElement("text_area7");
  showElement("label165");
  showElement("lolxD7");
  showElement("Equal4");
  showElement("lolxDRawr7");
  showElement("per4");
  hideElement("Dashline4");
}
function showSpace3() {
  showElement("dropdown8");
  showElement("label9");
  showElement("text_input8");
  showElement("text_area8");
  showElement("label166");
  showElement("lolxD8");
  showElement("Equal5");
  showElement("lolxDRawr8");
  showElement("per5");
  hideElement("Dashline5");
}
function hideSpace0() {
  catp4 = 0;
  setText("text_input4", "");
  hideElement("dropdown4");
  hideElement("label5");
  hideElement("text_input4");
  hideElement("text_area4");
  hideElement("label152");
  hideElement("lolxD4");
  hideElement("Equal1");
  hideElement("lolxDRawr4");
  hideElement("per1");
  showElement("Dashline1");
}
function hideSpace() {
  catp5 = 0;
  setText("text_input5", "");
  hideElement("dropdown5");
  hideElement("label6");
  hideElement("text_input5");
  hideElement("text_area5");
  hideElement("label163");
  hideElement("lolxD5");
  hideElement("Equal2");
  hideElement("lolxDRawr5");
  hideElement("per2");
  showElement("Dashline2");
}
function hideSpace1() {
  catp6 = 0;
  setText("text_input6", "");
  hideElement("dropdown6");
  hideElement("label7");
  hideElement("text_input6");
  hideElement("text_area6");
  hideElement("label164");
  hideElement("lolxD6");
  hideElement("Equal3");
  hideElement("lolxDRawr6");
  hideElement("per3");
  showElement("Dashline3");
}
function hideSpace2() {
  catp7 = 0;
  setText("text_input7", "");
  hideElement("dropdown7");
  hideElement("label8");
  hideElement("text_input7");
  hideElement("text_area7");
  hideElement("label165");
  hideElement("lolxD7");
  hideElement("Equal4");
  hideElement("lolxDRawr7");
  hideElement("per4");
  showElement("Dashline4");
}
function hideSpace3() {
  catp8 = 0;
  setText("text_input8", "");
  hideElement("dropdown8");
  hideElement("label9");
  hideElement("text_input8");
  hideElement("text_area8");
  hideElement("label166");
  hideElement("lolxD8");
  hideElement("Equal5");
  hideElement("lolxDRawr8");
  hideElement("per5");
  showElement("Dashline5");
}
//Creates Extra Drop Down Spots and removes them

clicks = 0;
hideElement("dropdown4");
hideElement("label5");
hideElement("text_input4");
hideElement("lolxDRawr4");
hideElement("lolxD4");
hideElement("label152");
hideElement("Equal1");
hideElement("per1");
showElement("Dashline1");
hideElement("label166");
hideElement("lolxD8");
hideElement("Equal5");
hideElement("lolxDRawr8");
hideElement("per5");
showElement("Dashline5");
hideElement("label165");
hideElement("lolxD7");
hideElement("Equal4");
hideElement("lolxDRawr7");
hideElement("per4");
showElement("Dashline4");
hideElement("label164");
hideElement("lolxD6");
hideElement("Equal3");
hideElement("lolxDRawr6");
hideElement("per3");
showElement("Dashline3");
hideElement("label163");
hideElement("lolxD5");
hideElement("Equal2");
hideElement("lolxDRawr5");
hideElement("per2");
showElement("Dashline2");
hideElement("dropdown5");
hideElement("label6");
hideElement("text_input5");
hideElement("dropdown6");
hideElement("dropdown7");
hideElement("dropdown8");
hideElement("text_input6");
hideElement("text_input7");
hideElement("text_input8");
hideElement("label7");
hideElement("label8");
hideElement("label9");
onEvent("plusSign1", "click", function() {
  clicks = clicks + 1;
  if (clicks == 1) {
    showSpace0();
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 2) {
    showSpace();
    console.log("# of clicks: " + clicks);
  }
  if (clicks >= 3) {
    showSpace1();
    clicks = 3;
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 4) {
    //showSpace2();
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 5) {
    //showSpace3();
    console.log("# of clicks: " + clicks);
  }
  if (clicks >= 5) {
    //clicks = 5;
    console.log("# of clicks: " + clicks);
  }
  }
);
onEvent("minusImage", "click", function() {
  if (clicks == 1) {
    hideSpace0();
    clicks = 1;
    clicks = clicks - 1;
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 2) {
    hideSpace();
    clicks = 2;
    clicks = clicks - 1;
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 3) {
    hideSpace1();
    clicks = 3;
    clicks = clicks - 1;
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 4) {
    hideSpace2();
    clicks = 4;
    clicks = clicks - 1;
    console.log("# of clicks: " + clicks);
  }
  if (clicks == 5) {
    hideSpace3();
    clicks = 5;
    clicks = clicks - 1;
    console.log("# of clicks: " + clicks);
  }

});


// The Percentage The Class is Worth

onEvent("text_input1", "input", function() {
  catp1 = getNumber("text_input1");
});
onEvent("text_input2", "input", function() {
  catp2 = getNumber("text_input2");
});
onEvent("text_input3", "input", function() {
  catp3 = getNumber("text_input3");
});
onEvent("text_input4", "input", function() {
  catp4 = getNumber("text_input4");
});
onEvent("text_input5", "input", function() {
  catp5 = getNumber("text_input5");
});
onEvent("text_input6", "input", function() {
  catp6 = getNumber("text_input6");
});
onEvent("text_input7", "change", function() {
  catp7 = getNumber("text_input7");
});
onEvent("text_input8", "change", function() {
  catp8 = getNumber("text_input8");
});

//Drop down for Classes

onEvent("dropdown1", "change", function() {
  setText("text_area1", getText("dropdown1"));
  setText("text_area1ex", getText("dropdown1"));
});
onEvent("dropdown2", "change", function() {
  setText("text_area2", getText("dropdown2"));
  setText("text_area2ex", getText("dropdown2"));
});
onEvent("dropdown3", "change", function() {
  setText("text_area3", getText("dropdown3"));
});
onEvent("dropdown4", "change", function() {
  setText("text_area4", getText("dropdown4"));
});
onEvent("dropdown5", "change", function() {
  setText("text_area5", getText("dropdown5"));
});
onEvent("dropdown6", "change", function() {
  setText("text_area6", getText("dropdown6"));
});
onEvent("dropdown7", "change", function() {
  setText("text_area7", getText("dropdown7"));
});
onEvent("dropdown8", "change", function() {
  setText("text_area8", getText("dropdown8"));
});

//Buttons!
onEvent("nextButton", "click", function() {
if ((catp1 + catp2 + catp3 + catp4 + catp5 + catp6) != 100) {
  showElement("MathWrong");
  } else {
  setScreen("gradeScreen");
  hideElement("MathWrong");
}

});




onEvent("nextButton3", "click", function() {
  setScreen("gradeScreen2");
});
onEvent("nextButton5", "click", function() {
  setScreen("gradeScreen3");
});
onEvent("nextButton6", "click", function() {
  if (clicks > 0) {
    setScreen("gradeScreen4");
  } else {
    setScreen("AvgScreen");
  }
  console.log("Grade Screen 4 Next Button Clicked");
});
onEvent("nextButton7", "click", function() {
  if (clicks > 1) {
    setScreen("gradeScreen5");
  } else {
    setScreen("AvgScreen");
  }
  console.log("Grade Screen 5 Next Button Clicked");

});
onEvent("nextButton8", "click", function() {
  if (clicks > 2) {
    setScreen("gradeScreen6");
  } else {
    setScreen("AvgScreen");
  }
});
onEvent("nextButton9", "click", function() {
  if (clicks > 3) {
    setScreen("gradeScreen7");
  } else {
    setScreen("AvgScreen");
  }
  console.log("Grade Screen 7 Next Button Clicked");
});
onEvent("nextButton10", "click", function() {
  if (clicks > 4) {
    setScreen("gradeScreen8");
  } else {
    setScreen("AvgScreen");
  }
  console.log("Grade Screen 7 Next Button Clicked");
});
onEvent("nextButton11", "click", function() {
  console.log("nextButton5 clicked!");
  setScreen("AvgScreen");
});
onEvent("nextButton3", "click", function() {
  gSr1 = Math.round(((getNumber("text_input1pG") / getNumber("text_input2pG")) * 100)*10)/10.0;
  gSr2 = Math.round(((getNumber("text_input3pG") / getNumber("text_input4pG")) * 100)*10)/10.0;
  gSr3 = Math.round(((getNumber("text_input5pG") / getNumber("text_input6pG")) * 100)*10)/10.0;
  gSr4 = Math.round(((getNumber("text_input7pG") / getNumber("text_input8pG")) * 100)*10)/10.0;
  gSr5 = Math.round(((getNumber("text_input9pG") / getNumber("text_input10pG")) * 100)*10)/10.0;
  gSr6 = Math.round(((getNumber("text_input11pG") / getNumber("text_input12pG")) * 100)*10)/10.0;
  gSr7 = Math.round(((getNumber("text_input13pG") / getNumber("text_input14pG")) * 100)*10)/10.0;
  gSr8 = Math.round(((getNumber("text_input15pG") / getNumber("text_input16pG")) * 100)*10)/10.0;
  gSr9 = Math.round(((getNumber("text_input17pG") / getNumber("text_input18pG")) * 100)*10)/10.0;
  gSr10 = Math.round(((getNumber("text_input19pG") / getNumber("text_input20pG")) * 100)*10)/10.0;
  gSr11 = Math.round(((getNumber("text_input21pG") / getNumber("text_input22pG")) * 100)*10)/10.0;
  gSr12 = Math.round(((getNumber("text_input23pG") / getNumber("text_input24pG")) * 100)*10)/10.0;
  gSr13 = Math.round(((getNumber("text_input25pG") / getNumber("text_input26pG")) * 100)*10)/10.0;
  gSr14 = Math.round(((getNumber("text_input27pG") / getNumber("text_input28pG")) * 100)*10)/10.0;
  gSr15 = Math.round(((getNumber("text_input29pG") / getNumber("text_input30pG")) * 100)*10)/10.0;
  gSr16 = Math.round(((getNumber("text_input31pG") / getNumber("text_input32pG")) * 100*10)/10.0);
  if (getText("text_input1pG") + getText("text_input2pG") === "") {
  gSr1 = 0 ;
  }
  if (getText("text_input3pG") + getText("text_input4pG") === "") {
  gSr2 = 0;
  }
  if (getText("text_input5pG") + getText("text_input6pG") === "") {
  gSr3 = 0;
  }
  if (getText("text_input7pG") + getText("text_input8pG") === "") {
  gSr4 = 0;
  }
  if (getText("text_input9pG") + getText("text_input10pG") === "") {
  gSr5 = 0;
  }
  if (getText("text_input11pG") + getText("text_input12pG") === "") {
  gSr6 = 0;
  }
  if (getText("text_input13pG") + getText("text_input14pG") === "") {
  gSr7 = 0;
  }
  if (getText("text_input15pG") + getText("text_input16pG") === "") {
  gSr8 = 0;
  }
  if (getText("text_input17pG") + getText("text_input18pG") === "") {
  gSr9 = 0 ;
  }
  if (getText("text_input19pG") + getText("text_input20pG") === "") {
  gSr10 = 0;
  }
  if (getText("text_input21pG") + getText("text_input22pG") === "") {
  gSr11 = 0;
  }
  if (getText("text_input23pG") + getText("text_input24pG") === "") {
  gSr12 = 0;
  }
  if (getText("text_input25pG") + getText("text_input26pG") === "") {
  gSr13 = 0;
  }
  if (getText("text_input27pG") + getText("text_input28pG") === "") {
  gSr14 = 0;
  }
  if (getText("text_input29pG") + getText("text_input30pG") === "") {
  gSr15 = 0;
  }
  if (getText("text_input31pG") + getText("text_input32pG") === "") {
  gSr16 = 0;
  }
  var gig1ex = Math.round(((getNumber("gig1ex") / getNumber("gig2ex")) * 100)*10)/10.0;
  var gig2ex = Math.round(((getNumber("gig3ex") / getNumber("gig4ex")) * 100)*10)/10.0;
  var gig3ex = Math.round(((getNumber("gig5ex") / getNumber("gig6ex")) * 100)*10)/10.0;
  var gig4ex = Math.round(((getNumber("gig7ex") / getNumber("gig8ex")) * 100)*10)/10.0;
  var gig5ex = Math.round(((getNumber("gig9ex") / getNumber("gig10ex")) * 100)*10)/10.0;
  var gig6ex = Math.round(((getNumber("gig11ex") / getNumber("gig12ex")) * 100)*10)/10.0;
  var gig7ex = Math.round(((getNumber("gig13ex") / getNumber("gig14ex")) * 100)*10)/10.0;
  var gig8ex = Math.round(((getNumber("gig15ex") / getNumber("gig16ex")) * 100)*10)/10.0;
  var gig9ex = Math.round(((getNumber("gig17ex") / getNumber("gig18ex")) * 100)*10)/10.0;
  var gig10ex = Math.round(((getNumber("gig19ex") / getNumber("gig20ex")) * 100)*10)/10.0;
  var gig11ex = Math.round(((getNumber("gig21ex") / getNumber("gig22ex")) * 100)*10)/10.0;
  var gig12ex = Math.round(((getNumber("gig23ex") / getNumber("gig24ex")) * 100)*10)/10.0;
  var gig13ex = Math.round(((getNumber("gig25ex") / getNumber("gig26ex")) * 100)*10)/10.0;
  var gig14ex = Math.round(((getNumber("gig27ex") / getNumber("gig28ex")) * 100)*10)/10.0;
  var gig15ex = Math.round(((getNumber("gig29ex") / getNumber("gig30ex")) * 100)*10)/10.0;
  var gig16ex = Math.round(((getNumber("gig31ex") / getNumber("gig32ex")) * 100)*10)/10.0;
  if (getText("gig1ex") + getText("gig2ex") === "") {
  gig1ex = 0 ;
  }
  if (getText("gig3ex") + getText("gig4ex") === "") {
  gig2ex = 0;
  }
  if (getText("gig5ex") + getText("gig6ex") === "") {
  gig3ex = 0;
  }
  if (getText("gig7ex") + getText("gig8ex") === "") {
  gig4ex = 0;
  }
  if (getText("gig9ex") + getText("gig10ex") === "") {
  gig5ex = 0;
  }
  if (getText("gig11ex") + getText("gig12ex") === "") {
  gig6ex = 0;
  }
  if (getText("gig13ex") + getText("gig14ex") === "") {
  gig7ex = 0;
  }
  if (getText("gig15ex") + getText("gig16ex") === "") {
  gig8ex = 0;
  }
  if (getText("gig17ex") + getText("gig18ex") === "") {
  gig9ex = 0 ;
  }
  if (getText("gig19ex") + getText("gig20ex") === "") {
  gig10ex = 0;
  }
  if (getText("gig21ex") + getText("gig22ex") === "") {
  gig11ex = 0;
  }
  if (getText("gig23ex") + getText("gig24ex") === "") {
  gig12ex = 0;
  }
  if (getText("gig25ex") + getText("gig26ex") === "") {
  gig13ex = 0;
  }
  if (getText("gig27ex") + getText("gig28ex") === "") {
  gig14ex = 0;
  }
  if (getText("gig29ex") + getText("gig30ex") === "") {
  gig15ex = 0;
  }
  if (getText("gig31ex") + getText("gig32ex") === "") {
  gig16ex = 0;
  }


  if (Di1 > 0) {
  if (TEST === 0 ) {
  TEST = TEST + 1;
  Divisor = Divisor + catp1;
  TEST = 1;
  }
  gS1Avg = Math.round(((gSr1 + gSr2 + gSr3 + gSr4 + gSr5 + gSr6 + gSr7 + gSr8 + gSr9 + gSr10 + gSr11 + gSr12 + gSr13 + gSr14 + gSr15 + gSr16 + gig1ex + gig2ex + gig3ex + gig4ex + gig5ex + gig6ex + gig7ex + gig8ex + gig9ex + gig10ex + gig11ex + gig12ex + gig13ex + gig14ex + gig15ex + gig16ex) / Di1)*10)/10.0;
  }
  if (Di1 === 0) {
  if (TEST == 1) {
  TEST = TEST - 1;
  Divisor = Divisor - catp1;
  TEST = 0;
  }
  gS1Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }

  cat1Worth = (catp1 / Divisor);
  console.log(("nextButton3 clicked!" + " Grade Screen 1 Avg Equals: ") + gS1Avg );
  setText("lolxD", getText("text_area1") + " Average");
  setText("lolxDRawr", Math.round(gS1Avg));
  if (gS1Avg === 0) {
  setText("lolxDRawr", "N/A");
  }
});
onEvent("nextButton5", "click", function() {
  gS2r1 = Math.round(((getNumber("text_input33pG") / getNumber("text_input34pG")) * 100)*10)/10.0;
  gS2r2 = Math.round(((getNumber("text_input35pG") / getNumber("text_input36pG")) * 100)*10)/10.0;
  gS2r3 = Math.round(((getNumber("text_input37pG") / getNumber("text_input38pG")) * 100)*10)/10.0;
  gS2r4 = Math.round(((getNumber("text_input39pG") / getNumber("text_input40pG")) * 100)*10)/10.0;
  gS2r5 = Math.round(((getNumber("text_input41pG") / getNumber("text_input42pG")) * 100)*10)/10.0;
  gS2r6 = Math.round(((getNumber("text_input43pG") / getNumber("text_input44pG")) * 100)*10)/10.0;
  gS2r7 = Math.round(((getNumber("text_input45pG") / getNumber("text_input46pG")) * 100)*10)/10.0;
  gS2r8 = Math.round(((getNumber("text_input47pG") / getNumber("text_input48pG")) * 100)*10)/10.0;
  gS2r9 = Math.round(((getNumber("text_input49pG") / getNumber("text_input50pG")) * 100)*10)/10.0;
  gS2r10 = Math.round(((getNumber("text_input51pG") / getNumber("text_input52pG")) * 100)*10)/10.0;
  gS2r11 = Math.round(((getNumber("text_input53pG") / getNumber("text_input54pG")) * 100)*10)/10.0;
  gS2r12 = Math.round(((getNumber("text_input55pG") / getNumber("text_input56pG")) * 100)*10)/10.0;
  gS2r13 = Math.round(((getNumber("text_input57pG") / getNumber("text_input58pG")) * 100)*10)/10.0;
  gS2r14 = Math.round(((getNumber("text_input59pG") / getNumber("text_input60pG")) * 100)*10)/10.0;
  gS2r15 = Math.round(((getNumber("text_input61pG") / getNumber("text_input62pG")) * 100)*10)/10.0;
  gS2r16 = Math.round(((getNumber("text_input63pG") / getNumber("text_input64pG")) * 100)*10)/10.0;
  if (getText("text_input33pG") + getText("text_input34pG") === "") {
  gS2r1 = 0 ;
  }
  if (getText("text_input35pG") + getText("text_input36pG") === "") {
  gS2r2 = 0;
  }
  if (getText("text_input37pG") + getText("text_input38pG") === "") {
  gS2r3 = 0;
  }
  if (getText("text_input39pG") + getText("text_input40pG") === "") {
  gS2r4 = 0;
  }
  if (getText("text_input41pG") + getText("text_input42pG") === "") {
  gS2r5 = 0;
  }
  if (getText("text_input43pG") + getText("text_input44pG") === "") {
  gS2r6 = 0;
  }
  if (getText("text_input45pG") + getText("text_input46pG") === "") {
  gS2r7 = 0;
  }
  if (getText("text_input47pG") + getText("text_input48pG") === "") {
  gS2r8 = 0;
  }
  if (getText("text_input49pG") + getText("text_input50pG") === "") {
  gS2r9 = 0 ;
  }
  if (getText("text_input51pG") + getText("text_input52pG") === "") {
  gS2r10 = 0;
  }
  if (getText("text_input53pG") + getText("text_input54pG") === "") {
  gS2r11 = 0;
  }
  if (getText("text_input55pG") + getText("text_input56pG") === "") {
  gS2r12 = 0;
  }
  if (getText("text_input57pG") + getText("text_input58pG") === "") {
  gS2r13 = 0;
  }
  if (getText("text_input59pG") + getText("text_input60pG") === "") {
  gS2r14 = 0;
  }
  if (getText("text_input61pG") + getText("text_input62pG") === "") {
  gS2r15 = 0;
  }
  if (getText("text_input63pG") + getText("text_input64pG") === "") {
  gS2r16 = 0;
  }
  fat1 = Math.round(((getNumber("gS2r1ex") / getNumber("gS2r2ex")) * 100)*10)/10.0;
  fat2 = Math.round(((getNumber("gS2r1ex") / getNumber("gS2r4ex")) * 100)*10)/10.0;
  fat3 = Math.round(((getNumber("gS2r5ex") / getNumber("gS2r6ex")) * 100)*10)/10.0;
  fat4 = Math.round(((getNumber("gS2r7ex") / getNumber("gS2r8ex")) * 100)*10)/10.0;
  fat5 = Math.round(((getNumber("gS2r9ex") / getNumber("gS2r10ex")) * 100)*10)/10.0;
  fat6 = Math.round(((getNumber("gS2r11ex") / getNumber("gS2r12ex")) * 100)*10)/10.0;
  fat7 = Math.round(((getNumber("gS2r13ex") / getNumber("gS2r14ex")) * 100)*10)/10.0;
  fat8 = Math.round(((getNumber("gS2r15ex") / getNumber("gS2r16ex")) * 100)*10)/10.0;
  fat9 = Math.round(((getNumber("gS2r17ex") / getNumber("gS2r18ex")) * 100)*10)/10.0;
  fat10 = Math.round(((getNumber("gS2r19ex") / getNumber("gS2r20ex")) * 100)*10)/10.0;
  fat11 = Math.round(((getNumber("gS2r21ex") / getNumber("gS2r22ex")) * 100)*10)/10.0;
  fat12 = Math.round(((getNumber("gS2r23ex") / getNumber("gS2r24ex")) * 100)*10)/10.0;
  fat13 = Math.round(((getNumber("gS2r25ex") / getNumber("gS2r26ex")) * 100)*10)/10.0;
  fat14 = Math.round(((getNumber("gS2r27ex") / getNumber("gS2r28ex")) * 100)*10)/10.0;
  fat15 = Math.round(((getNumber("gS2r29ex") / getNumber("gS2r30ex")) * 100)*10)/10.0;
  fat16 = Math.round(((getNumber("gS2r31ex") / getNumber("gS2r32ex")) * 100)*10)/10.0;
  if (getText("gS2r1ex") + getText("gS2r2ex") === "") {
  fat1 = 0 ;
  }
  if (getText("gS2r3ex") + getText("gS2r4ex") === "") {
  fat2 = 0;
  }
  if (getText("gS2r5ex") + getText("gS2r6ex") === "") {
  fat3 = 0;
  }
  if (getText("gS2r7ex") + getText("gS2r8ex") === "") {
  fat4 = 0;
  }
  if (getText("gS2r9ex") + getText("gS2r10ex") === "") {
  fat5 = 0;
  }
  if (getText("gS2r11ex") + getText("gS2r12ex") === "") {
  fat6 = 0;
  }
  if (getText("gS2r13ex") + getText("gS2r14ex") === "") {
  fat7 = 0;
  }
  if (getText("gS2r15ex") + getText("gS2r16ex") === "") {
  fat8 = 0;
  }
  if (getText("gS2r17ex") + getText("gS2r18ex") === "") {
  fat9 = 0 ;
  }
  if (getText("gS2r19ex") + getText("gS2r20ex") === "") {
  fat10 = 0;
  }
  if (getText("gS2r21ex") + getText("gS2r22ex") === "") {
  fat11 = 0;
  }
  if (getText("gS2r23ex") + getText("gS2r24ex") === "") {
  fat12 = 0;
  }
  if (getText("gS2r25ex") + getText("gS2r26ex") === "") {
  fat13 = 0;
  }
  if (getText("gS2r27ex") + getText("gS2r28ex") === "") {
  fat14 = 0;
  }
  if (getText("gS2r29ex") + getText("gS2r30ex") === "") {
  fat15 = 0;
  }
  if (getText("gS2r31ex") + getText("gS2r32ex") === "") {
  fat16 = 0;
  }

  if (Di2 > 0) {
  if (TEST2 === 0 ) {
  TEST2 = TEST2 + 1;
  Divisor = Divisor + catp2;
  TEST2 = 1;
  }
  gS2Avg = Math.round(((gS2r1 + gS2r2 + gS2r3 + gS2r4 + gS2r5 + gS2r6 + gS2r7 + gS2r8 + gS2r9 + gS2r10 + gS2r11 + gS2r12 + gS2r13 + gS2r14 + gS2r15 + gS2r16 + fat1 + fat2 + fat3 + fat4 + fat5 + fat6 + fat7 + fat8 + fat9 + fat10 + fat11 + fat12 + fat13 + fat14 + fat15 + fat16) / Di2)*10)/10.0;
  }
  if (Di2 === 0) {
  if (TEST2 == 1) {
  TEST2 = TEST2 - 1;
  Divisor = Divisor - catp2;
  TEST2 = 0;
  }
  gS2Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }
  cat2Worth = (catp2 / Divisor);
  console.log(("nextButton3 clicked!" + " Grade Screen 1 Avg Equals: ") + gS2Avg );
  setText("lolxD2", getText("text_area2") + " Average");
  setText("lolxDRawr2", Math.round(gS2Avg));
  if (gS2Avg === 0) {
  setText("lolxDRawr2", "N/A");
  }

});
onEvent("nextButton6", "click", function() {
  gS3r1 = Math.round(((getNumber("text_input65pG") / getNumber("text_input66pG")) * 100)*10)/10.0;
  gS3r2 = Math.round(((getNumber("text_input67pG") / getNumber("text_input68pG")) * 100)*10)/10.0;
  gS3r3 = Math.round(((getNumber("text_input69pG") / getNumber("text_input70pG")) * 100)*10)/10.0;
  gS3r4 = Math.round(((getNumber("text_input71pG") / getNumber("text_input72pG")) * 100)*10)/10.0;
  gS3r5 = Math.round(((getNumber("text_input73pG") / getNumber("text_input74pG")) * 100)*10)/10.0;
  gS3r6 = Math.round(((getNumber("text_input75pG") / getNumber("text_input76pG")) * 100)*10)/10.0;
  gS3r7 = Math.round(((getNumber("text_input77pG") / getNumber("text_input78pG")) * 100)*10)/10.0;
  gS3r8 = Math.round(((getNumber("text_input79pG") / getNumber("text_input80pG")) * 100)*10)/10.0;
  gS3r9 = Math.round(((getNumber("text_input81pG") / getNumber("text_input82pG")) * 100)*10)/10.0;
  gS3r10 = Math.round(((getNumber("text_input83pG") / getNumber("text_input84pG")) * 100)*10)/10.0;
  gS3r11 = Math.round(((getNumber("text_input85pG") / getNumber("text_input86pG")) * 100)*10)/10.0;
  gS3r12 = Math.round(((getNumber("text_input87pG") / getNumber("text_input88pG")) * 100)*10)/10.0;
  gS3r13 = Math.round(((getNumber("text_input89pG") / getNumber("text_input90pG")) * 100)*10)/10.0;
  gS3r14 = Math.round(((getNumber("text_input91pG") / getNumber("text_input92pG")) * 100)*10)/10.0;
  gS3r15 = Math.round(((getNumber("text_input93pG") / getNumber("text_input94pG")) * 100)*10)/10.0;
  gS3r16 = Math.round(((getNumber("text_input95pG") / getNumber("text_input96pG")) * 100)*10)/10.0;
  if (getText("text_input65pG") + getText("text_input66pG") === "") {
  gS3r1 = 0 ;
  }
  if (getText("text_input67pG") + getText("text_input68pG") === "") {
  gS3r2 = 0;
  }
  if (getText("text_input69pG") + getText("text_input70pG") === "") {
  gS3r3 = 0;
  }
  if (getText("text_input71pG") + getText("text_input72pG") === "") {
  gS3r4 = 0;
  }
  if (getText("text_input73pG") + getText("text_input74pG") === "") {
  gS3r5 = 0;
  }
  if (getText("text_input75pG") + getText("text_input76pG") === "") {
  gS3r6 = 0;
  }
  if (getText("text_input77pG") + getText("text_input78pG") === "") {
  gS3r7 = 0;
  }
  if (getText("text_input79pG") + getText("text_input80pG") === "") {
  gS3r8 = 0;
  }
  if (getText("text_input81pG") + getText("text_input82pG") === "") {
  gS3r9 = 0 ;
  }
  if (getText("text_input83pG") + getText("text_input84pG") === "") {
  gS3r10 = 0;
  }
  if (getText("text_input85pG") + getText("text_input86pG") === "") {
  gS3r11 = 0;
  }
  if (getText("text_input87pG") + getText("text_input88pG") === "") {
  gS3r12 = 0;
  }
  if (getText("text_input89pG") + getText("text_input90pG") === "") {
  gS3r13 = 0;
  }
  if (getText("text_input91pG") + getText("text_input92pG") === "") {
  gS3r14 = 0;
  }
  if (getText("text_input93pG") + getText("text_input94pG") === "") {
  gS3r15 = 0;
  }
  if (getText("text_input95pG") + getText("text_input96pG") === "") {
  gS3r16 = 0;
  }

  if (Di3 > 0) {
  if (TEST3 === 0 ) {
  TEST3 = TEST3 + 1;
  Divisor = Divisor + catp3;
  TEST3 = 1;
  }
  gS3Avg = Math.round(((gS3r1 + gS3r2 + gS3r3 + gS3r4 + gS3r5 + gS3r6 + gS3r7 + gS3r8 + gS3r9 + gS3r10 + gS3r11 + gS3r12 + gS3r13 + gS3r14 + gS3r15 + gS3r16) / Di3)*10)/10.0;
  }
  if (Di3 === 0) {
  if (TEST3 == 1) {
  TEST3 = TEST3 - 1;
  Divisor = Divisor - catp3;
  TEST3 = 0;
  }
  gS3Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }
  cat3Worth = (catp3 / Divisor);
  setText("lolxD3", getText("text_area3") + " Average");
  setText("lolxDRawr3", (Math.round(gS3Avg)));
  if (gS3Avg === 0) {
  setText("lolxDRawr3", "N/A");
  }
  console.log(("nextButton3 clicked!" + " Grade Screen 1 Avg Equals: ") + gS3Avg );

});
onEvent("nextButton7", "click", function() {
  gS4r1 = Math.round(((getNumber("gig1") / getNumber("gig2")) * 100)*10)/10.0;
  gS4r2 = Math.round(((getNumber("gig3") / getNumber("gig4")) * 100)*10)/10.0;
  gS4r3 = Math.round(((getNumber("gig5") / getNumber("gig6")) * 100)*10)/10.0;
  gS4r4 = Math.round(((getNumber("gig7") / getNumber("gig8")) * 100)*10)/10.0;
  gS4r5 = Math.round(((getNumber("gig9") / getNumber("gig10")) * 100)*10)/10.0;
  gS4r6 = Math.round(((getNumber("gig11") / getNumber("gig12")) * 100)*10)/10.0;
  gS4r7 = Math.round(((getNumber("gig13") / getNumber("gig14")) * 100)*10)/10.0;
  gS4r8 = Math.round(((getNumber("gig15") / getNumber("gig16")) * 100)*10)/10.0;
  gS4r9 = Math.round(((getNumber("gig17") / getNumber("gig18")) * 100)*10)/10.0;
  gS4r10 = Math.round(((getNumber("gig19") / getNumber("gig20")) * 100)*10)/10.0;
  gS4r11 = Math.round(((getNumber("gig21") / getNumber("gig22")) * 100)*10)/10.0;
  gS4r12 = Math.round(((getNumber("gig23") / getNumber("gig24")) * 100)*10)/10.0;
  gS4r13 = Math.round(((getNumber("gig25") / getNumber("gig26")) * 100)*10)/10.0;
  gS4r14 = Math.round(((getNumber("gig27") / getNumber("gig28")) * 100)*10)/10.0;
  gS4r15 = Math.round(((getNumber("gig29") / getNumber("gig30")) * 100)*10)/10.0;
  gS4r16 = Math.round(((getNumber("gig31") / getNumber("gig32")) * 100)*10)/10.0;
  if (getText("gig1") + getText("gig2") === "") {
  gS4r1 = 0 ;
  }
  if (getText("gig3") + getText("gig4") === "") {
  gS4r2 = 0;
  }
  if (getText("gig5") + getText("gig6") === "") {
  gS4r3 = 0;
  }
  if (getText("gig7") + getText("gig8") === "") {
  gS4r4 = 0;
  }
  if (getText("gig9") + getText("gig10") === "") {
  gS4r5 = 0;
  }
  if (getText("gig11") + getText("gig12") === "") {
  gS4r6 = 0;
  }
  if (getText("gig13") + getText("gig14") === "") {
  gS4r7 = 0;
  }
  if (getText("gig15") + getText("gig16") === "") {
  gS4r8 = 0;
  }
  if (getText("gig17") + getText("gig18") === "") {
  gS4r9 = 0 ;
  }
  if (getText("gig19") + getText("gig20") === "") {
  gS4r10 = 0;
  }
  if (getText("gig21") + getText("gig22") === "") {
  gS4r11 = 0;
  }
  if (getText("gig23") + getText("gig24") === "") {
  gS4r12 = 0;
  }
  if (getText("gig25") + getText("gig26") === "") {
  gS4r13 = 0;
  }
  if (getText("gig27") + getText("gig28") === "") {
  gS4r14 = 0;
  }
  if (getText("gig29") + getText("gig30") === "") {
  gS4r15 = 0;
  }
  if (getText("gig31") + getText("gig32") === "") {
  gS4r16 = 0;
  }
  if (Di4 > 0) {
  if (TEST4 === 0 ) {
  TEST4 = TEST4 + 1;
  Divisor = Divisor + catp4;
  TEST4 = 1;
  }
  gS4Avg =Math.round(((gS4r1 + gS4r2 + gS4r3 + gS4r4 + gS4r5 + gS4r6 + gS4r7 + gS4r8 + gS4r9 + gS4r10 + gS4r11 + gS4r12 + gS4r13 + gS4r14 + gS4r15 + gS4r16) / Di4)*10)/10.0;
  }

  if (Di4 === 0) {
  if (TEST4 == 1) {
  TEST4 = TEST4 - 1;
  Divisor = Divisor - catp4;
  TEST4 = 0;
  }
  gS4Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }
  cat4Worth = (catp4 / Divisor);
  console.log(("nextButton7 clicked!" + " Grade Screen 4 Avg Equals: ") + gS4Avg );
  setText("lolxD4", getText("text_area4") + " Average");
  setText("lolxDRawr4", Math.round(gS4Avg));
  if (gS4Avg === 0) {
  setText("lolxDRawr4", "N/A");
  }

});
onEvent("nextButton8", "click", function() {
  gS5r1 = Math.round(((getNumber("gig33") / getNumber("gig34")) * 100)*10)/10.0;
  gS5r2 = Math.round(((getNumber("gig35") / getNumber("gig36")) * 100)*10)/10.0;
  gS5r3 = Math.round(((getNumber("gig37") / getNumber("gig38")) * 100)*10)/10.0;
  gS5r4 = Math.round(((getNumber("gig39") / getNumber("gig40")) * 100)*10)/10.0;
  gS5r5 = Math.round(((getNumber("gig41") / getNumber("gig42")) * 100)*10)/10.0;
  gS5r6 = Math.round(((getNumber("gig43") / getNumber("gig44")) * 100)*10)/10.0;
  gS5r7 = Math.round(((getNumber("gig45") / getNumber("gig46")) * 100)*10)/10.0;
  gS5r8 = Math.round(((getNumber("gig47") / getNumber("gig48")) * 100)*10)/10.0;
  gS5r9 = Math.round(((getNumber("gig49") / getNumber("gig50")) * 100)*10)/10.0;
  gS5r10 = Math.round(((getNumber("gig51") / getNumber("gig52")) * 100)*10)/10.0;
  gS5r11 = Math.round(((getNumber("gig53") / getNumber("gig54")) * 100)*10)/10.0;
  gS5r12 = Math.round(((getNumber("gig55") / getNumber("gig56")) * 100)*10)/10.0;
  gS5r13 = Math.round(((getNumber("gig57") / getNumber("gig58")) * 100)*10)/10.0;
  gS5r14 = Math.round(((getNumber("gig59") / getNumber("gig60")) * 100)*10)/10.0;
  gS5r15 = Math.round(((getNumber("gig61") / getNumber("gig62")) * 100)*10)/10.0;
  gS5r16 = Math.round(((getNumber("gig63") / getNumber("gig64")) * 100)*10)/10.0;
  if (getText("gig33") + getText("gig34") === "") {
  gS5r1 = 0 ;
  }
  if (getText("gig35") + getText("gig36") === "") {
  gS5r2 = 0;
  }
  if (getText("gig37") + getText("gig38") === "") {
  gS5r3 = 0;
  }
  if (getText("gig39") + getText("gig40") === "") {
  gS5r4 = 0;
  }
  if (getText("gig41") + getText("gig42") === "") {
  gS5r5 = 0;
  }
  if (getText("gig43") + getText("gig44") === "") {
  gS5r6 = 0;
  }
  if (getText("gig45") + getText("gig46") === "") {
  gS5r7 = 0;
  }
  if (getText("gig47") + getText("gig48") === "") {
  gS5r8 = 0;
  }
  if (getText("gig49") + getText("gig50") === "") {
  gS5r9 = 0 ;
  }
  if (getText("gig51") + getText("gig52") === "") {
  gS5r10 = 0;
  }
  if (getText("gig53") + getText("gig54") === "") {
  gS5r11 = 0;
  }
  if (getText("gig55") + getText("gig56") === "") {
  gS5r12 = 0;
  }
  if (getText("gig57") + getText("gig58") === "") {
  gS5r13 = 0;
  }
  if (getText("gig59") + getText("gig60") === "") {
  gS5r14 = 0;
  }
  if (getText("gig61") + getText("gig62") === "") {
  gS5r15 = 0;
  }
  if (getText("gig63") + getText("gig64") === "") {
  gS5r16 = 0;
  }

  if (Di5 > 0) {
  if (TEST5 === 0 ) {
  TEST5 = TEST5 + 1;
  Divisor = Divisor + catp5;
  TEST5 = 1;
  }
  gS5Avg =Math.round(((gS5r1 + gS5r2 + gS5r3 + gS5r4 + gS5r5 + gS5r6 + gS5r7 + gS5r8 + gS5r9 + gS5r10 + gS5r11 + gS5r12 + gS5r13 + gS5r14 + gS5r15 + gS5r16) / Di5)*10)/10.0;
  }
  if (Di5 === 0) {
  if (TEST5 == 1) {
  TEST5 = TEST5 - 1;
  Divisor = Divisor - catp5;
  TEST5 = 0;
  }
  gS5Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }
  cat5Worth = (catp5 / Divisor);
  console.log(("nextButton8 clicked!" + " Grade Screen 5 Avg Equals: ") + gS5Avg );
  setText("lolxD5", getText("text_area5") + " Average");
  setText("lolxDRawr5", Math.round(gS5Avg));
  if (gS5Avg === 0) {
  setText("lolxDRawr5", "N/A");
  }
});
onEvent("nextButton9", "click", function() {
  gS6r1 = Math.round(((getNumber("text_input139") / getNumber("text_input140")) * 100)*10)/10.0;
  gS6r2 = Math.round(((getNumber("text_input141") / getNumber("text_input142")) * 100)*10)/10.0;
  gS6r3 = Math.round(((getNumber("text_input143") / getNumber("text_input144")) * 100)*10)/10.0;
  gS6r4 = Math.round(((getNumber("text_input145") / getNumber("text_input146")) * 100)*10)/10.0;
  gS6r5 = Math.round(((getNumber("text_input147") / getNumber("text_input148")) * 100)*10)/10.0;
  gS6r6 = Math.round(((getNumber("text_input149") / getNumber("text_input150")) * 100)*10)/10.0;
  gS6r7 = Math.round(((getNumber("text_input151") / getNumber("text_input152")) * 100)*10)/10.0;
  gS6r8 = Math.round(((getNumber("text_input153") / getNumber("text_input154")) * 100)*10)/10.0;
  gS6r9 = Math.round(((getNumber("text_input155") / getNumber("text_input156")) * 100)*10)/10.0;
  gS6r10 = Math.round(((getNumber("text_input157") / getNumber("text_input158")) * 100)*10)/10.0;
  gS6r11 = Math.round(((getNumber("text_input159") / getNumber("text_input160")) * 100)*10)/10.0;
  gS6r12 = Math.round(((getNumber("text_input161") / getNumber("text_input162")) * 100)*10)/10.0;
  gS6r13 = Math.round(((getNumber("text_input163") / getNumber("text_input164")) * 100)*10)/10.0;
  gS6r14 = Math.round(((getNumber("text_input165") / getNumber("text_input166")) * 100)*10)/10.0;
  gS6r15 = Math.round(((getNumber("text_input167") / getNumber("text_input168")) * 100)*10)/10.0;
  gS6r16 = Math.round(((getNumber("text_input169") / getNumber("text_input170")) * 100)*10)/10.0;
  if (getText("text_input139") + getText("text_input140") === "") {
  gS6r1 = 0 ;
  }
  if (getText("text_input141") + getText("text_input142") === "") {
  gS6r2 = 0;
  }
  if (getText("text_input143") + getText("text_input144") === "") {
  gS6r3 = 0;
  }
  if (getText("text_input145") + getText("text_input146") === "") {
  gS6r4 = 0;
  }
  if (getText("text_input147") + getText("text_input148") === "") {
  gS6r5 = 0;
  }
  if (getText("text_input149") + getText("text_input150") === "") {
  gS6r6 = 0;
  }
  if (getText("text_input151") + getText("text_input152") === "") {
  gS6r7 = 0;
  }
  if (getText("text_input153") + getText("text_input154") === "") {
  gS6r8 = 0;
  }
  if (getText("text_input155") + getText("text_input156") === "") {
  gS6r9 = 0 ;
  }
  if (getText("text_input157") + getText("text_input158") === "") {
  gS6r10 = 0;
  }
  if (getText("text_input159") + getText("text_input160") === "") {
  gS6r11 = 0;
  }
  if (getText("text_input161") + getText("text_input162") === "") {
  gS6r12 = 0;
  }
  if (getText("text_input163") + getText("text_input164") === "") {
  gS6r13 = 0;
  }
  if (getText("text_input165") + getText("text_input166") === "") {
  gS6r14 = 0;
  }
  if (getText("text_input167") + getText("text_input168") === "") {
  gS6r15 = 0;
  }
  if (getText("text_input169") + getText("text_input170") === "") {
  gS6r16 = 0;
  }

  if (Di6 > 0) {
  if (TEST6 === 0 ) {
  TEST6 = TEST6 + 1;
  Divisor = Divisor + catp6;
  TEST6 = 1;
  }
  gS6Avg =Math.round(((gS6r1 + gS6r2 + gS6r3 + gS6r4 + gS6r5 + gS6r6 + gS6r7 + gS6r8 + gS6r9 + gS6r10 + gS6r11 + gS6r12 + gS6r13 + gS6r14 + gS6r15 + gS6r16) / Di6)*10)/10.0;
  }
  if (Di6 === 0) {
  if (TEST6 == 1) {
  TEST6 = TEST6 - 1;
  Divisor = Divisor - catp6;
  TEST6 = 0;
  }
  gS6Avg = 0;
  }
  if (Divisor < 0) {
  Divisor = 0;
  }
  cat6Worth = (catp6 / Divisor);
  console.log(("nextButton9 clicked!" + " Grade Screen 6 Avg Equals: ") + gS6Avg );
  setText("lolxD6", getText("text_area6") + " Average");
  setText("lolxDRawr6", Math.round(gS6Avg));
  if (gS6Avg === 0) {
  setText("lolxDRawr6", "N/A");
  }
});





onEvent("backButton", "click", function() {
  console.log("backButton clicked!");
  setScreen("mathScreen");
});
onEvent("backButton1", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen");
});
onEvent("backButton2", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen2");
});
onEvent("backButton3", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen3");
});
onEvent("backButton4", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen4");
});
onEvent("backButton5", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen5");
});
onEvent("backButton6", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen6");
});
onEvent("backButton7", "click", function() {
  console.log("backButton clicked!");
  setScreen("gradeScreen7");
});
onEvent("backButtonMaths", "click", function() {
  console.log("backButton2 clicked!");
  setScreen("titleScreen");
});
onEvent("gS2exbackButton", "click", function() {
  setScreen("gradeScreen2");
});

onEvent("resetButton2", "click", function() {
  console.log("resetButton2 clicked!");
  reset();
  reset2();
  reset3();
  reset4();
  reset5();
  reset6();
  reset7();
  Divisor = 0;
  setText("FINAL", "");
});
onEvent("resetButton3", "click", function() {
  console.log("resetButton3 clicked!");
  reset2();
});
onEvent("resetButton4", "click", function() {
  console.log("resetButton4 clicked!");
  reset3();
});
onEvent("resetButton5", "click", function() {
  console.log("resetButton5 clicked!");
  reset4();
});
onEvent("resetButton6", "click", function() {
  console.log("resetButton5 clicked!");
  reset5();
});
onEvent("button10ex", "click", function() {
  console.log("button10ex clicked!");
  reset6();
});
onEvent("resetButton7", "click", function() {
  console.log("resetButton5 clicked!");
  reset7();
});


//Does Math on grade screen 1
var Di1 = 0;
onEvent("checkbox1", "click", function() {
  if (getChecked("checkbox1") === true) {
    Di1 = Di1 + 1;
    var gSr1 = (getNumber("text_input1pG") / getNumber("text_input2pG")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox1") + " Value of gSr1: ") + gSr1 + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("checkbox1") === false) {
    setText("text_input1pG", "");
    setText("text_input2pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox2", "click", function() {
  if (getChecked("checkbox2") === true) {
  Di1 = Di1 + 1;
  var gSr2 = (getNumber("text_input3pG") / getNumber("text_input4pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox2")) + "Value of gSr2: ") + gSr2 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox2") === false) {
    setText("text_input3pG", "");
    setText("text_input4pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }

});
onEvent("checkbox3", "click", function() {
  if (getChecked("checkbox3") === true) {
  Di1 = Di1 + 1;
  var gSr3 = (getNumber("text_input5pG") / getNumber("text_input6pG")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox3") + "Value of gSr3: ") + gSr3 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox3") === false) {
    setText("text_input5pG", "");
    setText("text_input6pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox4", "click", function() {
  if (getChecked("checkbox4") === true) {
  Di1 = Di1 + 1;
  var gSr4 = (getNumber("text_input7pG") / getNumber("text_input8pG")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox4") + "Value of gSr4: ") + gSr4 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox4") === false) {
    setText("text_input7pG", "");
    setText("text_input8pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox5", "click", function() {
  if (getChecked("checkbox5") === true) {
  Di1 = Di1 + 1;
  var gSr5 = (getNumber("text_input9pG") / getNumber("text_input10pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox5")) + "Value of gSr5: ") + gSr5 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox5") === false) {
    setText("text_input9pG", "");
    setText("text_input10pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox6", "click", function() {
  if (getChecked("checkbox6") === true) {
  Di1 = Di1 + 1;
  var gSr6 = (getNumber("text_input11pG") / getNumber("text_input12pG")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox6") + "Value of gSr6: ") + gSr6 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox6") === false) {
    setText("text_input11pG", "");
    setText("text_input12pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox7", "click", function() {
  if (getChecked("checkbox7") === true) {
  Di1 = Di1 + 1;
  var gSr7 = (getNumber("text_input13pG") / getNumber("text_input14pG")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox7") + "Value of gSr7: ") + gSr7 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox7") === false) {
    setText("text_input13pG", "");
    setText("text_input14pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox8", "click", function() {
  if (getChecked("checkbox8") === true) {
  Di1 = Di1 + 1;
  var gSr8 = (getNumber("text_input15pG") / getNumber("text_input16pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox8")) + "Value of gSr8: ") + gSr8 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox8") === false) {
    setText("text_input15pG", "");
    setText("text_input16pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox9", "click", function() {
  if (getChecked("checkbox9") === true) {
  Di1 = Di1 + 1;
  var gSr9 = (getNumber("text_input17pG") / getNumber("text_input18pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox9")) + "Value of gSr9: ") + gSr9 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox9") === false) {
    setText("text_input17pG", "");
    setText("text_input18pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox10", "click", function() {
  if (getChecked("checkbox10") === true) {
  Di1 = Di1 + 1;
  var gSr10 = (getNumber("text_input19pG") / getNumber("text_input20pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox10")) + "Value of gSr10: ") + gSr10 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox10") === false) {
    setText("text_input19pG", "");
    setText("text_input20pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox11", "click", function() {
  if (getChecked("checkbox11") === true) {
  Di1 = Di1 + 1;
  var gSr11 = (getNumber("text_input21pG") / getNumber("text_input22pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox11")) + "Value of gSr11: ") + gSr11 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox11") === false) {
    setText("text_input21pG", "");
    setText("text_input22pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox12", "click", function() {
  if (getChecked("checkbox12") === true) {
  Di1 = Di1 + 1;
  var gSr12 = (getNumber("text_input23pG") / getNumber("text_input24pG")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox12") + "Value of gSr12: ") + gSr12 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox12") === false) {
    setText("text_input23pG", "");
    setText("text_input24pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox13", "click", function() {
  if (getChecked("checkbox13") === true) {
    Di1 = Di1 + 1;
    var gSr13 = (getNumber("text_input25pG") / getNumber("text_input26pG")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox13") + "Value of gSr13: ") + gSr13 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox13") === false) {
    setText("text_input25pG", "");
    setText("text_input26pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox14", "click", function() {
  if (getChecked("checkbox14") === true) {
    Di1 = Di1 + 1;
    var gSr14 = (getNumber("text_input27pG") / getNumber("text_input28pG")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox14") + "Value of gSr14: ") + gSr14 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox14") === false) {
    setText("text_input27pG", "");
    setText("text_input28pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox15", "click", function() {
  if (getChecked("checkbox15") === true) {
    Di1 = Di1 + 1;
    var gSr15 = (getNumber("text_input29pG") / getNumber("text_input30pG")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox15")) + "Value of gSr15: ") + gSr15 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox15") === false) {
    setText("text_input29pG", "");
    setText("text_input30pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("checkbox16", "click", function() {
  if (getChecked("checkbox16") === true) {
    Di1 = Di1 + 1;
    var gSr16 = (getNumber("text_input31pG") / getNumber("text_input32pG")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox16") + "Value of gSr16: ") + gSr16 + " Divisor 1 Equals:" + Di1);
  }
  if (getChecked("checkbox16") === false) {
    setText("text_input31pG", "");
    setText("text_input32pG", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
//Does Math on Extra Screen 1
onEvent("ch1", "click", function() {
  if (getChecked("ch1") === true) {
    Di1 = Di1 + 1;
    var gig1ex = (getNumber("gig1ex") / getNumber("gig2ex")) * 100;
    console.log((("ch1 checked? " + getChecked("ch1") + " Value of gig1ex: ") + gig1ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch1") === false) {
    setText("gig1ex", "");
    setText("gig2ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch2", "click", function() {
  if (getChecked("ch2") === true) {
    Di1 = Di1 + 1;
    var gig2ex = (getNumber("gig3ex") / getNumber("gig4ex")) * 100;
    console.log((("ch1 checked? " + getChecked("ch2") + " Value of gig2ex: ") + gig2ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch1") === false) {
    setText("gig3ex", "");
    setText("gig4ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch3", "click", function() {
  if (getChecked("ch3") === true) {
    Di1 = Di1 + 1;
    var gig3ex = (getNumber("gig5ex") / getNumber("gig6ex")) * 100;
    console.log((("ch3 checked? " + getChecked("ch3") + " Value of gig3ex: ") + gig3ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch3") === false) {
    setText("gig5ex", "");
    setText("gig6ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch4", "click", function() {
  if (getChecked("ch4") === true) {
    Di1 = Di1 + 1;
    var gig4ex = (getNumber("gig7ex") / getNumber("gig8ex")) * 100;
    console.log((("ch4 checked? " + getChecked("ch4") + " Value of gig4ex: ") + gig4ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch4") === false) {
    setText("gig7ex", "");
    setText("gig8ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch5", "click", function() {
  if (getChecked("ch4") === true) {
    Di1 = Di1 + 1;
    var gig5ex = (getNumber("gig9ex") / getNumber("gig10ex")) * 100;
    console.log((("ch5 checked? " + getChecked("ch5") + " Value of gig5ex: ") + gig5ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch5") === false) {
    setText("gig9ex", "");
    setText("gig10ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch6", "click", function() {
  if (getChecked("ch6") === true) {
    Di1 = Di1 + 1;
    var gig6ex = (getNumber("gig11ex") / getNumber("gig12ex")) * 100;
    console.log((("ch6 checked? " + getChecked("ch6") + " Value of gig6ex: ") + gig6ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch6") === false) {
    setText("gig11ex", "");
    setText("gig12ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch7", "click", function() {
  if (getChecked("ch7") === true) {
    Di1 = Di1 + 1;
    var gig7ex = (getNumber("gig13ex") / getNumber("gig14ex")) * 100;
    console.log((("ch7 checked? " + getChecked("ch7") + " Value of gig7ex: ") + gig7ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch7") === false) {
    setText("gig13ex", "");
    setText("gig14ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch8", "click", function() {
  if (getChecked("ch8") === true) {
    Di1 = Di1 + 1;
    var gig8ex = (getNumber("gig15ex") / getNumber("gig16ex")) * 100;
    console.log((("ch1 checked? " + getChecked("ch8") + " Value of gig8ex: ") + gig8ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch8") === false) {
    setText("gig15ex", "");
    setText("gig16ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch9", "click", function() {
  if (getChecked("ch9") === true) {
    Di1 = Di1 + 1;
    var gig9ex = (getNumber("gig17ex") / getNumber("gig18ex")) * 100;
    console.log((("ch9 checked? " + getChecked("ch9") + " Value of gi91ex: ") + gig9ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch9") === false) {
    setText("gig17ex", "");
    setText("gig18ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch10", "click", function() {
  if (getChecked("ch10") === true) {
    Di1 = Di1 + 1;
    var gig10ex = (getNumber("gig19ex") / getNumber("gig20ex")) * 100;
    console.log((("ch10 checked? " + getChecked("ch1") + " Value of gig10ex: ") + gig10ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch10") === false) {
    setText("gig19ex", "");
    setText("gig20ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch11", "click", function() {
  if (getChecked("ch11") === true) {
    Di1 = Di1 + 1;
    var gig11ex = (getNumber("gig21ex") / getNumber("gig22ex")) * 100;
    console.log((("ch11 checked? " + getChecked("ch11") + " Value of gig11ex: ") + gig11ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch11") === false) {
    setText("gig21ex", "");
    setText("gig22ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch12", "click", function() {
  if (getChecked("ch12") === true) {
    Di1 = Di1 + 1;
    var gig12ex = (getNumber("gig23ex") / getNumber("gig24ex")) * 100;
    console.log((("ch12 checked? " + getChecked("ch12") + " Value of gig12ex: ") + gig12ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch12") === false) {
    setText("gig23ex", "");
    setText("gig24ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch13", "click", function() {
  if (getChecked("ch13") === true) {
    Di1 = Di1 + 1;
    var gig13ex = (getNumber("gig25ex") / getNumber("gig26ex")) * 100;
    console.log((("ch13 checked? " + getChecked("ch13") + " Value of gig13ex: ") + gig13ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch13") === false) {
    setText("gig25ex", "");
    setText("gig26ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch14", "click", function() {
  if (getChecked("ch14") === true) {
    Di1 = Di1 + 1;
    var gig14ex = (getNumber("gig27ex") / getNumber("gig28ex")) * 100;
    console.log((("ch14 checked? " + getChecked("ch14") + " Value of gig14ex: ") + gig14ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch14") === false) {
    setText("gig27ex", "");
    setText("gig28ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch15", "click", function() {
  if (getChecked("ch15") === true) {
    Di1 = Di1 + 1;
    var gig15ex = (getNumber("gig29ex") / getNumber("gig30ex")) * 100;
    console.log((("ch15 checked? " + getChecked("ch15") + " Value of gig15ex: ") + gig15ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch15") === false) {
    setText("gig29ex", "");
    setText("gig30ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
onEvent("ch16", "click", function() {
  if (getChecked("ch16") === true) {
    Di1 = Di1 + 1;
    var gig16ex = (getNumber("gig31ex") / getNumber("gig32ex")) * 100;
    console.log((("ch16 checked? " + getChecked("ch16") + " Value of gig16ex: ") + gig16ex + " Divisor 1 Equals:" + Di1));
  }
  if (getChecked("ch16") === false) {
    setText("gig31ex", "");
    setText("gig32ex", "");
    Di1 = Di1 - 1;
    console.log("Divisor 1 Equals: " + Di1);
  }
});
//Does Math on Grade Screen 2
var Di2 = 0;
onEvent("checkbox17", "click", function() {
  if (getChecked("checkbox17") === true) {
    Di2 = Di2 + 1;
    var gS2r1 = (getNumber("text_input33pG") / getNumber("text_input34pG")) * 100;
    console.log((("checkbox17 checked? " + getChecked("checkbox17") + " Value of gS2r1: ") + gS2r1) + " Divisor 2 Equals:" + Di2);
  }
  if (getChecked("checkbox17") === false) {
    setText("text_input33pG", "");
    setText("text_input34pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 2 Equals: " + Di2);
  }
});
onEvent("checkbox18", "click", function() {
  if (getChecked("checkbox18") === true) {
  Di2 = Di2 + 1;
  var gS2r2 = (getNumber("text_input35pG") / getNumber("text_input36pG")) * 100;
  console.log(((("checkbox18 checked? " + getChecked("checkbox18")) + "Value of gS2r2: ") + gS2r2) + " Divisor 2 Equals:" + Di2);
  }
  if (getChecked("checkbox18") === false) {
    setText("text_input35pG", "");
    setText("text_input36pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 2 Equals: " + Di2);
  }

});
onEvent("checkbox19", "click", function() {
  if (getChecked("checkbox19") === true) {
  Di2 = Di2 + 1;
  var gS2r3 = (getNumber("text_input37pG") / getNumber("text_input38pG")) * 100;
  console.log((("checkbox19 checked? " + getChecked("checkbox19") + "Value of gS2r3: ") + gS2r3) + " Divisor 2 Equals:" + Di2);
  }
  if (getChecked("checkbox19") === false) {
    setText("text_input37pG", "");
    setText("text_input38pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 2 Equals: " + Di2);
  }
});
onEvent("checkbox20", "click", function() {
  if (getChecked("checkbox20") === true) {
  Di2 = Di2 + 1;
  var gS2r4 = (getNumber("text_input39pG") / getNumber("text_input40pG")) * 100;
  console.log((("checkbox20 checked? " + getChecked("checkbox20") + "Value of gSr4: ") + gS2r4) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox20") === false) {
    setText("text_input39pG", "");
    setText("text_input40pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox21", "click", function() {
  if (getChecked("checkbox21") === true) {
  Di2 = Di2 + 1;
  var gS2r5 = (getNumber("text_input41pG") / getNumber("text_input42pG")) * 100;
  console.log(((("checkbox1 checked? " + getChecked("checkbox21")) + "Value of gS2r5: ") + gS2r5) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox21") === false) {
    setText("text_input41pG", "");
    setText("text_input42pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox22", "click", function() {
  if (getChecked("checkbox22") === true) {
  Di2 = Di2 + 1;
  var gS2r6 = (getNumber("text_input43pG") / getNumber("text_input44pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox22") + "Value of gS2r6: ") + gS2r6) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox22") === false) {
    setText("text_input43pG", "");
    setText("text_input44pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox23", "click", function() {
  if (getChecked("checkbox23") === true) {
  Di2 = Di2 + 1;
  var gS2r7 = (getNumber("text_input45pG") / getNumber("text_input46pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox23") + "Value of gS2r7: ") + gS2r7) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox23") === false) {
    setText("text_input45pG", "");
    setText("text_input46pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox24", "click", function() {
  if (getChecked("checkbox24") === true) {
  Di2 = Di2 + 1;
  var gS2r8 = (getNumber("text_input47pG") / getNumber("text_input48pG")) * 100;
  console.log(((("checkbox1 checked? " + getChecked("checkbox24")) + "Value of gS2r8: ") + gS2r8) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox24") === false) {
    setText("text_input47pG", "");
    setText("text_input48pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox25", "click", function() {
  if (getChecked("checkbox25") === true) {
  Di2 = Di2 + 1;
  var gS2r9 = (getNumber("text_input49pG") / getNumber("text_input50pG")) * 100;
  console.log(((("checkbox1 checked? " + getChecked("checkbox25")) + "Value of gS2r9: ") + gS2r9) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox25") === false) {
    setText("text_input49pG", "");
    setText("text_input50pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox26", "click", function() {
  if (getChecked("checkbox26") === true) {
  Di2 = Di2 + 1;
  var gS2r10 = (getNumber("text_input51pG") / getNumber("text_input52pG")) * 100;
  console.log(((("checkbox1 checked? " + getChecked("checkbox26")) + "Value of gS2r10: ") + gS2r10) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox26") === false) {
    setText("text_input51pG", "");
    setText("text_input52pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox27", "click", function() {
  if (getChecked("checkbox27") === true) {
  Di2 = Di2 + 1;
  var gS2r11 = (getNumber("text_input53pG") / getNumber("text_input54pG")) * 100;
  console.log(((("checkbox1 checked? " + getChecked("checkbox27")) + "Value of gS2r11: ") + gS2r11) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox27") === false) {
    setText("text_input53pG", "");
    setText("text_input54pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox28", "click", function() {
  if (getChecked("checkbox28") === true) {
  Di2 = Di2 + 1;
  var gS2r12 = (getNumber("text_input55pG") / getNumber("text_input56pG")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox28") + "Value of gS2r12: ") + gS2r12) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox28") === false) {
    setText("text_input55pG", "");
    setText("text_input56pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox29", "click", function() {
  if (getChecked("checkbox29") === true) {
    Di2 = Di2 + 1;
    var gS2r13 = (getNumber("text_input57pG") / getNumber("text_input58pG")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox29") + "Value of gS2r13: ") + gS2r13) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox29") === false) {
    setText("text_input57pG", "");
    setText("text_input58pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox30", "click", function() {
  if (getChecked("checkbox30") === true) {
    Di2 = Di2 + 1;
    var gS2r14 = (getNumber("text_input59pG") / getNumber("text_input60pG")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox30") + "Value of gS2r14: ") + gS2r14) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox30") === false) {
    setText("text_input59pG", "");
    setText("text_input60pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox31", "click", function() {
  if (getChecked("checkbox31") === true) {
    Di2 = Di2 + 1;
    var gS2r15 = (getNumber("text_input61pG") / getNumber("text_input62pG")) * 100;
    console.log(((("checkbox1 checked? " + getChecked("checkbox31")) + "Value of gS2r15: ") + gS2r15) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox31") === false) {
    setText("text_input61pG", "");
    setText("text_input62pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("checkbox32", "click", function() {
  if (getChecked("checkbox32") === true) {
    Di2 = Di2 + 1;
    var gS2r16 = (getNumber("text_input63pG") / getNumber("text_input64pG")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox32") + "Value of gS2r16: ") + gS2r16) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("checkbox32") === false) {
    setText("text_input63pG", "");
    setText("text_input64pG", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
// Does Math on Screen 2 extra
onEvent("S2ch1", "click", function() {
  if (getChecked("S2ch1") === true) {
    Di2 = Di2 + 1;
    fat1 = (getNumber("gS2r1ex") / getNumber("gS2r2ex")) * 100;
  }
  if (getChecked("S2ch1") === false) {
    setText("gS2r1ex", "");
    setText("gS2r2ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 2 Equals: " + Di2);
  }
});
onEvent("S2ch2", "click", function() {
  if (getChecked("S2ch2") === true) {
   Di2 = Di2 + 1;
   fat2 = (getNumber("gS2r3ex") / getNumber("gS2r4ex")) * 100;
  }
  if (getChecked("S2ch2") === false) {
    setText("gS2r3ex", "");
    setText("gS2r4ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 2 Equals: " + Di2);
  }

});
onEvent("S2ch3", "click", function() {
  if (getChecked("S2ch3") === true) {
   Di2 = Di2 + 1;
   fat3 = (getNumber("gS2r5ex") / getNumber("gS2r6ex")) * 100;
  }
  if (getChecked("S2ch3") === false) {
    setText("gS2r5ex", "");
    setText("gS2r6ex", "");
    Di2 = Di2 - 1;
  }
});
onEvent("S2ch4", "click", function() {
  if (getChecked("S2ch4") === true) {
   Di2 = Di2 + 1;
   fat4 = (getNumber("gS2r7ex") / getNumber("gS2r8ex")) * 100;
  }
  if (getChecked("S2ch4") === false) {
    setText("gS2r7ex", "");
    setText("gS2r8ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch5", "click", function() {
  if (getChecked("S2ch5") === true) {
   Di2 = Di2 + 1;
   fat5 = (getNumber("gS2r9ex") / getNumber("gS2r10ex")) * 100;
  }
  if (getChecked("S2ch5") === false) {
    setText("gS2r9ex", "");
    setText("gS2r10ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch6", "click", function() {
  if (getChecked("S2ch6") === true) {
  Di2 = Di2 + 1;
  fat6 = (getNumber("gS2r11ex") / getNumber("gS2r12ex")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox22") + "Value of gS2r6: ") + gS2r6) + " Divisor 1 Equals:" + Di2);
  }
  if (getChecked("S2ch6") === false) {
    setText("gS2r11ex", "");
    setText("gS2r12ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch7", "click", function() {
  if (getChecked("S2ch7") === true) {
  Di2 = Di2 + 1;
  fat7 = (getNumber("gS2r13ex") / getNumber("gS2r14ex")) * 100;
  }
  if (getChecked("S2ch7") === false) {
    setText("gS2r13ex", "");
    setText("gS2r14ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch8", "click", function() {
  if (getChecked("S2ch8") === true) {
  Di2 = Di2 + 1;
  fat8 = (getNumber("gS2r15ex") / getNumber("gS2r16ex")) * 100;
  }
  if (getChecked("S2ch8") === false) {
    setText("gS2r15ex", "");
    setText("gS2r16ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch9", "click", function() {
  if (getChecked("S2ch9") === true) {
  Di2 = Di2 + 1;
  fat9 = (getNumber("gS2r17ex") / getNumber("gS2r18ex")) * 100;
  }
  if (getChecked("S2ch9") === false) {
    setText("gS2r17ex", "");
    setText("gS2r18ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch10", "click", function() {
  if (getChecked("S2ch10") === true) {
  Di2 = Di2 + 1;
  fat10 = (getNumber("gS2r19ex") / getNumber("gS2r20ex")) * 100;
  }
  if (getChecked("S2ch10") === false) {
    setText("gS2r19ex", "");
    setText("gS2r20ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch11", "click", function() {
  if (getChecked("S2ch11") === true) {
  Di2 = Di2 + 1;
  fat11 = (getNumber("gS2r21ex") / getNumber("gS2r22ex")) * 100;
  }
  if (getChecked("S2ch11") === false) {
    setText("gS2r21ex", "");
    setText("gS2r22ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch12", "click", function() {
  if (getChecked("S2ch12") === true) {
  Di2 = Di2 + 1;
  fat12 = (getNumber("gS2r23ex") / getNumber("gS2r24ex")) * 100;
  }
  if (getChecked("S2ch12") === false) {
    setText("gS2r23ex", "");
    setText("gS2r24ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch13", "click", function() {
  if (getChecked("S2ch13") === true) {
    Di2 = Di2 + 1;
    fat13 = (getNumber("gS2r25ex") / getNumber("gS2r26ex")) * 100;
  }
  if (getChecked("S2ch13") === false) {
    setText("gS2r25ex", "");
    setText("gS2r26ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch14", "click", function() {
  if (getChecked("S2ch14") === true) {
    Di2 = Di2 + 1;
    fat14 = (getNumber("gS2r27ex") / getNumber("gS2r28ex")) * 100;

  }
  if (getChecked("S2ch14") === false) {
    setText("gS2r27ex", "");
    setText("gS2r28ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch15", "click", function() {
  if (getChecked("S2ch15") === true) {
    Di2 = Di2 + 1;
    fat15 = (getNumber("gS2r29ex") / getNumber("gS2r30ex")) * 100;

  }
  if (getChecked("S2ch15") === false) {
    setText("gS2r29ex", "");
    setText("gS2r30ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
onEvent("S2ch16", "click", function() {
  if (getChecked("S2ch16") === true) {
    Di2 = Di2 + 1;
    fat16 = (getNumber("gS2r31ex") / getNumber("gS2r32ex")) * 100;

  }
  if (getChecked("S2ch16") === false) {
    setText("gS2r31ex", "");
    setText("gS2r32ex", "");
    Di2 = Di2 - 1;
    console.log("Divisor 1 Equals: " + Di2);
  }
});
// Does Math on Screen 3
var Di3 = 0;
onEvent("checkbox33", "click", function() {
  if (getChecked("checkbox33") === true) {
    Di3 = Di3 + 1;
    var gS3r1 = (getNumber("text_input65pG") / getNumber("text_input66pG")) * 100;
    console.log((("checkbox33 checked? " + getChecked("checkbox33") + " Value of gS3r1: ") + gS3r1) + " Divisor 2 Equals:" + Di3);
  }
  if (getChecked("checkbox33") === false) {
    setText("text_input65pG", "");
    setText("text_input66pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 2 Equals: " + Di3);
  }
});
onEvent("checkbox34", "click", function() {
  if (getChecked("checkbox34") === true) {
  Di3 = Di3 + 1;
  var gS3r2 = (getNumber("text_input67pG") / getNumber("text_input68pG")) * 100;
  console.log(((("checkbox34 checked? " + getChecked("checkbox34")) + "Value of gS3r2: ") + gS3r2) + " Divisor 2 Equals:" + Di3);
  }
  if (getChecked("checkbox34") === false) {
    setText("text_input67pG", "");
    setText("text_input68pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 2 Equals: " + Di3);
  }

});
onEvent("checkbox35", "click", function() {
  if (getChecked("checkbox35") === true) {
  Di3 = Di3 + 1;
  var gS3r3 = (getNumber("text_input69pG") / getNumber("text_input70pG")) * 100;
  console.log((("checkbox35 checked? " + getChecked("checkbox35") + "Value of gS3r3: ") + gS3r3) + " Divisor 2 Equals:" + Di3);
  }
  if (getChecked("checkbox35") === false) {
    setText("text_input69pG", "");
    setText("text_input70pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 2 Equals: " + Di3);
  }
});
onEvent("checkbox36", "click", function() {
  if (getChecked("checkbox36") === true) {
  Di3 = Di3 + 1;
  var gS3r4 = (getNumber("text_input71pG") / getNumber("text_input72pG")) * 100;
  console.log((("checkbox36 checked? " + getChecked("checkbox36") + "Value of gS3r4: ") + gS3r4) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox36") === false) {
    setText("text_input71pG", "");
    setText("text_input72pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox37", "click", function() {
  if (getChecked("checkbox37") === true) {
  Di3 = Di3 + 1;
  var gS3r5 = (getNumber("text_input73pG") / getNumber("text_input74pG")) * 100;
  console.log(((("checkbox37 checked? " + getChecked("checkbox37")) + "Value of gS3r5: ") + gS3r5) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox37") === false) {
    setText("text_input73pG", "");
    setText("text_input74pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox38", "click", function() {
  if (getChecked("checkbox38") === true) {
  Di3 = Di3 + 1;
  var gS3r6 = (getNumber("text_input75pG") / getNumber("text_input76pG")) * 100;
  console.log((("checkbox38 checked? " + getChecked("checkbox38") + "Value of gS3r6: ") + gS3r6) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox38") === false) {
    setText("text_input75pG", "");
    setText("text_input76pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox39", "click", function() {
  if (getChecked("checkbox39") === true) {
  Di3 = Di3 + 1;
  var gS3r7 = (getNumber("text_input77pG") / getNumber("text_input78pG")) * 100;
  console.log((("checkbox39 checked? " + getChecked("checkbox39") + "Value of gS3r7: ") + gS3r7) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox39") === false) {
    setText("text_input77pG", "");
    setText("text_input78pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox40", "click", function() {
  if (getChecked("checkbox40") === true) {
  Di3 = Di3 + 1;
  var gS3r8 = (getNumber("text_input79pG") / getNumber("text_input80pG")) * 100;
  console.log(((("checkbox40 checked? " + getChecked("checkbox40")) + "Value of gS3r8: ") + gS3r8) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox40") === false) {
    setText("text_input79pG", "");
    setText("text_input80pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox41", "click", function() {
  if (getChecked("checkbox41") === true) {
  Di3 = Di3 + 1;
  var gS3r9 = (getNumber("text_input81pG") / getNumber("text_input82pG")) * 100;
  console.log(((("checkbox41 checked? " + getChecked("checkbox41")) + "Value of gS3r9: ") + gS3r9) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox41") === false) {
    setText("text_input81pG", "");
    setText("text_input82pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox42", "click", function() {
  if (getChecked("checkbox42") === true) {
  Di3 = Di3 + 1;
  var gS3r10 = (getNumber("text_input83pG") / getNumber("text_input84pG")) * 100;
  console.log(((("checkbox42 checked? " + getChecked("checkbox42")) + "Value of gS3r10: ") + gS3r10) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox42") === false) {
    setText("text_input83pG", "");
    setText("text_input84pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox43", "click", function() {
  if (getChecked("checkbox43") === true) {
  Di3 = Di3 + 1;
  var gS3r11 = (getNumber("text_input85pG") / getNumber("text_input86pG")) * 100;
  console.log(((("checkbox43 checked? " + getChecked("checkbox43")) + "Value of gS3r11: ") + gS3r11) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox43") === false) {
    setText("text_input85pG", "");
    setText("text_input86pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox44", "click", function() {
  if (getChecked("checkbox44") === true) {
  Di3 = Di3 + 1;
  var gS3r12 = (getNumber("text_input87pG") / getNumber("text_input88pG")) * 100;
  console.log((("checkbox44 checked? " + getChecked("checkbox44") + "Value of gS3r12: ") + gS3r12) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox44") === false) {
    setText("text_input87pG", "");
    setText("text_input88pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox45", "click", function() {
  if (getChecked("checkbox45") === true) {
    Di3 = Di3 + 1;
    var gS3r13 = (getNumber("text_input89pG") / getNumber("text_input90pG")) * 100;
    console.log((("checkbox45 checked? " + getChecked("checkbox45") + "Value of gS3r13: ") + gS3r13) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox45") === false) {
    setText("text_input89pG", "");
    setText("text_input90pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox46", "click", function() {
  if (getChecked("checkbox46") === true) {
    Di3 = Di3 + 1;
    var gS3r14 = (getNumber("text_input91pG") / getNumber("text_input92pG")) * 100;
    console.log((("checkbox46 checked? " + getChecked("checkbox46") + "Value of gS3r14: ") + gS3r14) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox46") === false) {
    setText("text_input91pG", "");
    setText("text_input92pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox47", "click", function() {
  if (getChecked("checkbox47") === true) {
    Di3 = Di3 + 1;
    var gS3r15 = (getNumber("text_input93pG") / getNumber("text_input94pG")) * 100;
    console.log(((("checkbox47 checked? " + getChecked("checkbox47")) + "Value of g3r15: ") + gS3r15) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox47") === false) {
    setText("text_input93pG", "");
    setText("text_input94pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});
onEvent("checkbox48", "click", function() {
  if (getChecked("checkbox48") === true) {
    Di3 = Di3 + 1;
    var gS3r16 = (getNumber("text_input95pG") / getNumber("text_input96pG")) * 100;
    console.log((("checkbox48 checked? " + getChecked("checkbox48") + "Value of gS3r16: ") + gS3r16) + " Divisor 1 Equals:" + Di3);
  }
  if (getChecked("checkbox48") === false) {
    setText("text_input95pG", "");
    setText("text_input96pG", "");
    Di3 = Di3 - 1;
    console.log("Divisor 1 Equals: " + Di3);
  }
});

// Does Math on Screen 4
var Di4 = 0;
onEvent("checkbox49", "click", function() {
  if (getChecked("checkbox49") === true) {
    Di4 = Di4 + 1;
    var gS4r1 = (getNumber("gig1") / getNumber("gig2")) * 100;
    console.log((("checkbox49 checked? " + getChecked("checkbox49") + " Value of gS4r1: ") + gS4r1) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox49") === false) {
    setText("gig1", "");
    setText("gig2", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox50", "click", function() {
  if (getChecked("checkbox50") === true) {
  Di4 = Di4 + 1;
  var gS4r2 = (getNumber("gig3") / getNumber("gig4")) * 100;
  console.log(((("checkbox50 checked? " + getChecked("checkbox50")) + "Value of gS4r2: ") + gS4r2) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox50") === false) {
    setText("gig3", "");
    setText("gig4", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox51", "click", function() {
  if (getChecked("checkbox51") === true) {
  Di4 = Di4 + 1;
  var gS4r3 = (getNumber("gig5") / getNumber("gig6")) * 100;
  console.log((("checkbox51 checked? " + getChecked("checkbox51") + "Value of gS4r3: ") + gS4r3) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox51") === false) {
    setText("gig5", "");
    setText("gig6", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox52", "click", function() {
  if (getChecked("checkbox52") === true) {
  Di4 = Di4 + 1;
  var gS4r4 = (getNumber("gig7") / getNumber("gig8")) * 100;
  console.log((("checkbox52 checked? " + getChecked("checkbox52") + "Value of gS4r4: ") + gS4r4) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox52") === false) {
    setText("gig7", "");
    setText("gig8", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox53", "click", function() {
  if (getChecked("checkbox53") === true) {
  Di4 = Di4 + 1;
  var gS4r5 = (getNumber("gig9") / getNumber("gig10")) * 100;
  console.log(((("checkbox53 checked? " + getChecked("checkbox53")) + "Value of gS4r5: ") + gS4r5) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox53") === false) {
    setText("gig9", "");
    setText("gig10", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox54", "click", function() {
  if (getChecked("checkbox54") === true) {
  Di4 = Di4 + 1;
  var gS4r6 = (getNumber("gig11") / getNumber("gig12")) * 100;
  console.log((("checkbox54 checked? " + getChecked("checkbox54") + "Value of gS4r6: ") + gS4r6) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox54") === false) {
    setText("gig11", "");
    setText("gig12", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox55", "click", function() {
  if (getChecked("checkbox55") === true) {
  Di4 = Di4 + 1;
  var gS4r7 = (getNumber("gig13") / getNumber("gig14")) * 100;
  console.log((("checkbox55 checked? " + getChecked("checkbox55") + "Value of gS4r7: ") + gS4r7) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox55") === false) {
    setText("gig13", "");
    setText("gig14", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox56", "click", function() {
  if (getChecked("checkbox56") === true) {
  Di4 = Di4 + 1;
  var gS4r8 = (getNumber("gig15") / getNumber("gig16")) * 100;
  console.log(((("checkbox56 checked? " + getChecked("checkbox56")) + "Value of gS4r8: ") + gS4r8) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox40") === false) {
    setText("gig15", "");
    setText("gig16", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox57", "click", function() {
  if (getChecked("checkbox57") === true) {
  Di4 = Di4 + 1;
  var gS4r9 = (getNumber("gig17") / getNumber("gig18")) * 100;
  console.log(((("checkbox57 checked? " + getChecked("checkbox57")) + "Value of gS4r9: ") + gS4r9) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox57") === false) {
    setText("gig17", "");
    setText("gig18", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox58", "click", function() {
  if (getChecked("checkbox58") === true) {
  Di4 = Di4 + 1;
  var gS4r10 = (getNumber("gig19") / getNumber("gig20")) * 100;
  console.log(((("checkbox58 checked? " + getChecked("checkbox58")) + "Value of gS4r10: ") + gS4r10) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox58") === false) {
    setText("gig19", "");
    setText("gig20", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox59", "click", function() {
  if (getChecked("checkbox59") === true) {
  Di4 = Di4 + 1;
  var gS4r11 = (getNumber("gig21") / getNumber("gig22")) * 100;
  console.log(((("checkbox59 checked? " + getChecked("checkbox59")) + "Value of gS4r11: ") + gS4r11) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox59") === false) {
    setText("gig21", "");
    setText("gig22", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox60", "click", function() {
  if (getChecked("checkbox60") === true) {
  Di4 = Di4 + 1;
  var gS4r12 = (getNumber("gig23") / getNumber("gig24")) * 100;
  console.log((("checkbox60 checked? " + getChecked("checkbox60") + "Value of gS4r12: ") + gS4r12) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox60") === false) {
    setText("gig23", "");
    setText("gig24", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox61", "click", function() {
  if (getChecked("checkbox61") === true) {
    Di4 = Di4 + 1;
    var gS4r13 = (getNumber("gig25") / getNumber("gig26")) * 100;
    console.log((("checkbox61 checked? " + getChecked("checkbox61") + "Value of gS4r13: ") + gS4r13) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox61") === false) {
    setText("gig25", "");
    setText("gig26", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox62", "click", function() {
  if (getChecked("checkbox62") === true) {
    Di4 = Di4 + 1;
    var gS4r14 = (getNumber("gig27") / getNumber("gig28")) * 100;
    console.log((("checkbox62 checked? " + getChecked("checkbox62") + "Value of gS4r14: ") + gS4r14) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox62") === false) {
    setText("gig27", "");
    setText("gig28", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox63", "click", function() {
  if (getChecked("checkbox63") === true) {
    Di4 = Di4 + 1;
    var gS4r15 = (getNumber("gig29") / getNumber("gig30")) * 100;
    console.log(((("checkbox63 checked? " + getChecked("checkbox63")) + "Value of g4r15: ") + gS4r15) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox63") === false) {
    setText("gig29", "");
    setText("gig30", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
onEvent("checkbox64", "click", function() {
  if (getChecked("checkbox64") === true) {
    Di4 = Di4 + 1;
    var gS4r16 = (getNumber("gig31") / getNumber("gig32")) * 100;
    console.log((("checkbox64 checked? " + getChecked("checkbox64") + "Value of gS4r16: ") + gS4r16) + " Divisor 4 Equals:" + Di4);
  }
  if (getChecked("checkbox64") === false) {
    setText("gig31", "");
    setText("gig32", "");
    Di4 = Di4 - 1;
    console.log("Divisor 4 Equals: " + Di4);
  }
});
//Does Math on Screen 5
var Di5 = 0;
onEvent("checkbox65", "click", function() {
  if (getChecked("checkbox65") === true) {
  Di5 = Di5 + 1;
  var gS5r1 = (getNumber("gig33") / getNumber("gig34")) * 100;
  console.log((("checkbox65 checked? " + getChecked("checkbox65") + "Value of gS5r1: ") + gS5r1) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox65") === false) {
    setText("gig33", "");
    setText("gig34", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox66", "click", function() {
  if (getChecked("checkbox66") === true) {
  Di5 = Di5 + 1;
  var gS5r2 = (getNumber("gig35") / getNumber("gig36")) * 100;
  console.log((("checkbox66 checked? " + getChecked("checkbox66") + "Value of gS5r2: ") + gS5r2) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox66") === false) {
    setText("gig35", "");
    setText("gig36", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox67", "click", function() {
  if (getChecked("checkbox67") === true) {
  Di5 = Di5 + 1;
  var gS5r3 = (getNumber("gig37") / getNumber("gig38")) * 100;
  console.log((("checkbox67 checked? " + getChecked("checkbox67") + "Value of gS5r3: ") + gS5r3) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox67") === false) {
    setText("gig37", "");
    setText("gig38", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox68", "click", function() {
  if (getChecked("checkbox68") === true) {
  Di5 = Di5 + 1;
  var gS5r4 = (getNumber("gig39") / getNumber("gig40")) * 100;
  console.log((("checkbox68 checked? " + getChecked("checkbox68") + "Value of gS5r4: ") + gS5r4) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox68") === false) {
    setText("gig39", "");
    setText("gig40", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox69", "click", function() {
  if (getChecked("checkbox69") === true) {
  Di5 = Di5 + 1;
  var gS5r5 = (getNumber("gig41") / getNumber("gig42")) * 100;
  console.log((("checkbox69 checked? " + getChecked("checkbox69") + "Value of gS5r5: ") + gS5r5) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox69") === false) {
    setText("gig41", "");
    setText("gig42", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox70", "click", function() {
  if (getChecked("checkbox70") === true) {
  Di5 = Di5 + 1;
  var gS5r6 = (getNumber("gig43") / getNumber("gig44")) * 100;
  console.log((("checkbox70 checked? " + getChecked("checkbox70") + "Value of gS5r6: ") + gS5r6) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox70") === false) {
    setText("gig43", "");
    setText("gig44", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox71", "click", function() {
  if (getChecked("checkbox71") === true) {
  Di5 = Di5 + 1;
  var gS5r7 = (getNumber("gig45") / getNumber("gig46")) * 100;
  console.log((("checkbox71 checked? " + getChecked("checkbox71") + "Value of gS5r7: ") + gS5r7) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox71") === false) {
    setText("gig45", "");
    setText("gig46", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox72", "click", function() {
  if (getChecked("checkbox72") === true) {
  Di5 = Di5 + 1;
  var gS5r8 = (getNumber("gig47") / getNumber("gig48")) * 100;
  console.log((("checkbox72 checked? " + getChecked("checkbox72") + "Value of gS5r8: ") + gS5r8) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox72") === false) {
    setText("gig47", "");
    setText("gig48", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox73", "click", function() {
  if (getChecked("checkbox73") === true) {
  Di5 = Di5 + 1;
  var gS5r9 = (getNumber("gig49") / getNumber("gig50")) * 100;
  console.log((("checkbox73 checked? " + getChecked("checkbox73") + "Value of gS5r9: ") + gS5r9) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox73") === false) {
    setText("gig49", "");
    setText("gig50", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox74", "click", function() {
  if (getChecked("checkbox74") === true) {
  Di5 = Di5 + 1;
  var gS5r10 = (getNumber("gig51") / getNumber("gig52")) * 100;
  console.log((("checkbox74 checked? " + getChecked("checkbox74") + "Value of gS5r10: ") + gS5r10) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox74") === false) {
    setText("gig51", "");
    setText("gig52", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox75", "click", function() {
  if (getChecked("checkbox75") === true) {
  Di5 = Di5 + 1;
  var gS5r11 = (getNumber("gig53") / getNumber("gig54")) * 100;
  console.log((("checkbox75 checked? " + getChecked("checkbox75") + "Value of gS5r11: ") + gS5r11) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox75") === false) {
    setText("gig53", "");
    setText("gig54", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox76", "click", function() {
  if (getChecked("checkbox76") === true) {
  Di5 = Di5 + 1;
  var gS5r12 = (getNumber("gig55") / getNumber("gig56")) * 100;
  console.log((("checkbox76 checked? " + getChecked("checkbox76") + "Value of gS5r12: ") + gS5r12) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox76") === false) {
    setText("gig55", "");
    setText("gig56", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox77", "click", function() {
  if (getChecked("checkbox77") === true) {
  Di5 = Di5 + 1;
  var gS5r13 = (getNumber("gig57") / getNumber("gig58")) * 100;
  console.log((("checkbox77 checked? " + getChecked("checkbox77") + "Value of gS5r13: ") + gS5r13) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox77") === false) {
    setText("gig57", "");
    setText("gig58", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox78", "click", function() {
  if (getChecked("checkbox78") === true) {
  Di5 = Di5 + 1;
  var gS5r14 = (getNumber("gig59") / getNumber("gig60")) * 100;
  console.log((("checkbox78 checked? " + getChecked("checkbox78") + "Value of gS5r14: ") + gS5r14) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox78") === false) {
    setText("gig59", "");
    setText("gig60", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox79", "click", function() {
  if (getChecked("checkbox79") === true) {
  Di5 = Di5 + 1;
  var gS5r15 = (getNumber("gig61") / getNumber("gig62")) * 100;
  console.log((("checkbox79 checked? " + getChecked("checkbox79") + "Value of gS5r15: ") + gS5r15) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox79") === false) {
    setText("gig61", "");
    setText("gig62", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
onEvent("checkbox80", "click", function() {
  if (getChecked("checkbox80") === true) {
  Di5 = Di5 + 1;
  var gS5r16 = (getNumber("gig63") / getNumber("gig64")) * 100;
  console.log((("checkbox80 checked? " + getChecked("checkbox80") + "Value of gS5r16: ") + gS5r16) + " Divisor 5 Equals:" + Di5);
  }
  if (getChecked("checkbox80") === false) {
    setText("gig63", "");
    setText("gig64", "");
    Di5 = Di5 - 1;
    console.log("Divisor 5 Equals: " + Di5);
  }
});
// DOES MATH ON SCREEN 6
var Di6 = 0;
onEvent("checkbox81", "click", function() {
  if (getChecked("checkbox81") === true) {
    Di6 = Di6 + 1;
    gS6r1 = (getNumber("text_input139") / getNumber("text_input140")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox81") + " Value of gS6r1: ") + gS6r1 + " Divisor 6 Equals:" + Di6));
  }
  if (getChecked("checkbox81") === false) {
    setText("text_input139", "");
    setText("text_input140", "");
    Di6 = Di6 - 1;
    console.log("Divisor 1 Equals: " + Di6);
  }
});
onEvent("checkbox82", "click", function() {
  if (getChecked("checkbox82") === true) {
  Di6 = Di6 + 1;
  gS6r2 = (getNumber("text_input141") / getNumber("text_input142")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox82")) + "Value of gS6r2: ") + gS6r2 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox82") === false) {
    setText("text_input141", "");
    setText("text_input142", "");
    Di6 = Di6 - 1;
    console.log("Divisor 1 Equals: " + Di6);
  }

});
onEvent("checkbox83", "click", function() {
  if (getChecked("checkbox83") === true) {
  Di6 = Di6 + 1;
  gS6r3 = (getNumber("text_input143") / getNumber("text_input144")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox3") + "Value of gS6r3: ") + gS6r3 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox83") === false) {
    setText("text_input143", "");
    setText("text_input144", "");
    Di6 = Di6 - 1;
    console.log("Divisor 1 Equals: " + Di6);
  }
});
onEvent("checkbox84", "click", function() {
  if (getChecked("checkbox84") === true) {
  Di6 = Di6 + 1;
  gS6r4 = (getNumber("text_input145") / getNumber("text_input146")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox84") + "Value of g6Sr4: ") + gS6r4 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox84") === false) {
    setText("text_input145", "");
    setText("text_input146", "");
    Di6 = Di6 - 1;
    console.log("Divisor 1 Equals: " + Di6);
  }
});
onEvent("checkbox85", "click", function() {
  if (getChecked("checkbox85") === true) {
  Di6 = Di6 + 1;
  gS6r5 = (getNumber("text_input147") / getNumber("text_input148")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox85")) + "Value of gS6r5: ") + gS6r5 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox85") === false) {
    setText("text_input147", "");
    setText("text_input148", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox86", "click", function() {
  if (getChecked("checkbox86") === true) {
  Di6 = Di6 + 1;
  gS6r6 = (getNumber("text_input149") / getNumber("text_input150")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox96") + "Value of gS6r6: ") + gS6r6 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox86") === false) {
    setText("text_input149", "");
    setText("text_input150", "");
    Di6 = Di6 - 1;
    console.log("Divisor 1 Equals: " + Di6);
  }
});
onEvent("checkbox87", "click", function() {
  if (getChecked("checkbox87") === true) {
  Di6 = Di6 + 1;
  gS6r7 = (getNumber("text_input151") / getNumber("text_input152")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox87") + "Value of gS6r7: ") + gS6r7 + " Divisor 1 Equals:" + Di6);
  }
  if (getChecked("checkbox87") === false) {
    setText("text_input151", "");
    setText("text_input152", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox88", "click", function() {
  if (getChecked("checkbox88") === true) {
  Di6 = Di6 + 1;
  gS6r8 = (getNumber("text_input153") / getNumber("text_input154")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox88")) + "Value of gS6r8: ") + gS6r8 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox88") === false) {
    setText("text_input153", "");
    setText("text_input154", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox89", "click", function() {
  if (getChecked("checkbox89") === true) {
  Di6 = Di6 + 1;
  gS6r9 = (getNumber("text_input155") / getNumber("text_input156")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox89")) + "Value of gS6r9: ") + gS6r9 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox89") === false) {
    setText("text_input155", "");
    setText("text_input156", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox90", "click", function() {
  if (getChecked("checkbox90") === true) {
  Di6 = Di6 + 1;
  gS6r10 = (getNumber("text_input157") / getNumber("text_input158")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox90")) + "Value of gS6r10: ") + gS6r10 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox90") === false) {
    setText("text_input157", "");
    setText("text_input158", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox91", "click", function() {
  if (getChecked("checkbox91") === true) {
  Di6 = Di6 + 1;
  gS6r11 = (getNumber("text_input159") / getNumber("text_input160")) * 100;
  console.log((("checkbox1 checked? " + getChecked("checkbox91")) + "Value of gS6r11: ") + gS6r11 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox91") === false) {
    setText("text_input159", "");
    setText("text_input160", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox92", "click", function() {
  if (getChecked("checkbox92") === true) {
  Di6 = Di6 + 1;
  gS6r12 = (getNumber("text_input161") / getNumber("text_input162")) * 100;
  console.log(("checkbox1 checked? " + getChecked("checkbox92") + "Value of gS6r12: ") + gS6r12 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox92") === false) {
    setText("text_input161", "");
    setText("text_input162", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox93", "click", function() {
  if (getChecked("checkbox93") === true) {
    Di6 = Di6 + 1;
    gS6r13 = (getNumber("text_input163") / getNumber("text_input164")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox93") + "Value of gS6r13: ") + gS6r13 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox93") === false) {
    setText("text_input163", "");
    setText("text_input164", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox94", "click", function() {
  if (getChecked("checkbox94") === true) {
    Di6 = Di6 + 1;
    gS6r14 = (getNumber("text_input165") / getNumber("text_input166")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox94") + "Value of gS6r14: ") + gS6r14 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox94") === false) {
    setText("text_input165", "");
    setText("text_input166", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox95", "click", function() {
  if (getChecked("checkbox95") === true) {
    Di6 = Di6 + 1;
    gS6r15 = (getNumber("text_input167") / getNumber("text_input168")) * 100;
    console.log((("checkbox1 checked? " + getChecked("checkbox95")) + "Value of gS6r15: ") + gS6r15 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox95") === false) {
    setText("text_input167", "");
    setText("text_input168", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("checkbox96", "click", function() {
  if (getChecked("checkbox96") === true) {
    Di6 = Di6 + 1;
    gS6r16 = (getNumber("text_input169") / getNumber("text_input170")) * 100;
    console.log(("checkbox1 checked? " + getChecked("checkbox96") + "Value of gS6r16: ") + gS6r16 + " Divisor 6 Equals:" + Di6);
  }
  if (getChecked("checkbox96") === false) {
    setText("text_input169", "");
    setText("text_input170", "");
    Di6 = Di6 - 1;
    console.log("Divisor 6 Equals: " + Di6);
  }
});
onEvent("button2", "click", function() {
  console.log("button2 clicked!");
  setScreen("titleScreen");
  setText("FINAL", "");
});
var jah1;
var jah2;
var jah3;
var jah4;
var jah5;
var jah6;
onEvent("calc", "click", function() {
cat1Worth = (catp1 / Divisor);
cat2Worth = (catp2 / Divisor);
cat3Worth = (catp3 / Divisor);
cat4Worth = (catp4 / Divisor);
cat5Worth = (catp5 / Divisor);
cat6Worth = (catp6 / Divisor);
jah1 = (gS1Avg * cat1Worth);
jah2 = (gS2Avg * cat2Worth);
jah3 = (gS3Avg * cat3Worth);
jah4 = (gS4Avg * cat4Worth);
jah5 = (gS5Avg * cat5Worth);
jah6 = (gS6Avg * cat6Worth);
fGrade = Math.round((jah1 + jah2 + jah3 + jah4 + jah5 + jah6)*10)/10.0;
setText("FINAL" , Math.round(fGrade));
});
onEvent("MS1", "click", function() {
  setScreen("extraScreen1");
});
onEvent("backButton3ex", "click", function() {
  setScreen("gradeScreen");
});
onEvent("lolxD", "click", function() {
setScreen("gradeScreen");
});
onEvent("lolxD2", "click", function() {
setScreen("gradeScreen2");
});
onEvent("lolxD3", "click", function() {
setScreen("gradeScreen3");
});
onEvent("lolxD4", "click", function() {
setScreen("gradeScreen4");
});
onEvent("lolxD5", "click", function() {
setScreen("gradeScreen5");
});
onEvent("lolxD6", "click", function() {
setScreen("gradeScreen6");
});
onEvent("MS2", "click", function() {
  setScreen("gradeScreen2ex");
});
