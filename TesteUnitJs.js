function teste(){

	if (document.getElementById("qunit").style.display == "none")
	{
		document.getElementById("qunit").style.display = "block";
		QUnit.test( "equal test", function( assert ) {
	    assert.ok(testeRetornaLinhasTrue(), "True; equal succeeds retornaLinhas" );
	    assert.ok(testeRetornaLinhasFalse(),"False; equal succeeds retornaLinhas" );
	    assert.deepEqual( "OK", "ok", "Empty, Zero; equal succeeds" );
	    assert.deepEqual( "", "", "Empty, Empty; equal succeeds" );
	    assert.deepEqual( "three", 3, "Three, 3; equal fails" );
	    assert.deepEqual( true, false, "null, false; equal fails" );
		});	
	}
	else
	{	

		document.getElementById("qunit").style.display = "none";
		
	}
	
}


function testeRetornaLinhasTrue()
{
	var file  = "okok \n okok";
	if (retornaLinhas(file).length > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function testeRetornaLinhasFalse()
{
	var file  = "";
	if (retornaLinhas(file).length > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}


