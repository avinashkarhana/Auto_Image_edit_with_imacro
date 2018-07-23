//IMacro js script by Avinash Karhana//




//for path use double backslashes in place of single

var bgpath="D:\\bg\\"; //bacground image folder path

var txtpath="D:\\txt\\"; //text image folder path

var downpath="D:\\down\\"; //download folder path




var bgformat=".jpg"; //background image format eg. ".jpg"

var textformat=".png"; //text image format eg. ".png"




var bgimgno=3; //total number of background image

var txtimgno=1; //total number of text image





//DO NOT EDIT ANYTHING FROM THIS POINT
function pl(){
for(var i=1;i<=bgimgno;i++)
{
	for(var j=1;j<=txtimgno;j++)
{
var macro = "CODE:";
macro += "VERSION BUILD=12.0.501.6698" + "\n";
macro += "TAB T=1" + "\n";
macro += "TAB CLOSEALLOTHERS" + "\n";
macro += "'SET !PLAYBACKDELAY 0.00" + "\n";
macro += "SET I "+i+"\n";
macro += "SET J "+j+"\n";
macro += "URL GOTO=https://picfont.com/" + "\n";
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:upload_element CONTENT="+bgpath+"{{I}}"+bgformat+ "\n";
macro += "WAIT SECONDS=7" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:×" + "\n";
macro += "TAG POS=1 TYPE=A ATTR=TXT:IMPORT" + "\n";
macro += "TAG POS=1 TYPE=INPUT:FILE ATTR=NAME:import_element CONTENT="+txtpath+"{{J}}"+textformat+ "\n";
macro += "SET !EXTRACT NULL" + "\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ID:brThumb EXTRACT=TXT\"" + "\n";
macro += "SET Object_is_there EVAL(\"var s='{{!EXTRACT}}'; var x; if(s!='#EANF'){x='HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG';} else{x='BODY';}; x;\")" + "\n";
macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG\" BUTTON=0" + "\n";
macro += "EVENT TYPE=MOUSEDOWN SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG\" BUTTON=0" + "\n";
macro += "EVENT TYPE=MOUSEMOVE SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG\" POINT=\"(425,343)\"" + "\n";
macro += "EVENTS TYPE=MOUSEMOVE SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG\" POINTS=\"(425,344),(489,350)\"" + "\n";
macro += "EVENT TYPE=MOUSEUP POINT=\"(489,350)\"" + "\n";
macro += "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>DIV>IMG\" BUTTON=0" + "\n";
macro += "WAIT SECONDS=7"+ "\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:save_pic_name CONTENT={{I}}{{J}}" + "\n";
macro += "ONDOWNLOAD FOLDER="+downpath+" FILE=* WAIT=YES" + "\n";
macro += "TAG POS=1 TYPE=SPAN ATTR=TXT:(medium<SP>quality<SP>:<SP>small<SP>file)" + "\n";
iimPlay(macro);
}}
var close="CODE:"+ "\n";
close += "TAB T=1"+ "\n";
close += "TAB CLOSEALLOTHERS"+ "\n";
close += "TAB CLOSE"+ "\n";
iimPlay(close);
}
pl();