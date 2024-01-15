// search google by 1001search.ir
//hint URL: https://www.google.com/search?q=ti+site%253A1001ketab.ir


function DoSearch(){
	var SearchBox = document.getElementById("SearchBox1");
	var CheckBox = document.getElementById("CheckBox1");
	if(SearchBox.value == ""){
		window.alert("متنی را برای جستجو وارد کنید.");
		return;
	}
	URL = "https://www.google.com/search?q=" + SearchBox.value;
	LimitTo1001ketab = "";
	if( CheckBox.checked )
		LimitTo1001ketab = "+site:1001ketab.ir";
		URL = URL + LimitTo1001ketab;
	window.location.href = URL;
}
    