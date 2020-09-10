// Niels Bronkhorst
// Pizza calculator

// welcome bericht
alert('Welcome bij de pizza calculator') 

// laat het menu zien
alert('U heeft keuze uit 3 afmetingen pizza. Small €6,95. Medium €11,50. Large €15,50'); 

const pricesmall = 6.95; // zet de prijs van de small pizza vast
const pricemedium = 11.50; // zet de prijs van de medium pizza vast
const pricelarge = 15.50; // zet de prijs van de large pizza vast

// vraagt hoeveel small pizza's de persoon wilt en slaat het op
smallpizza = parseInt(prompt('hoeveel small pizza\'s wilt u')); 
	document.write('<br> Small pizza\'s'); // zet de text small pizza op het scherm
	document.write('<br> Aantal: ' + smallpizza); // zet het aantal op het scherm
	document.write('<br> Prijs: €' + (smallpizza * pricesmall)); // zet de totaal prijs van de pizza op het scherm

// vraagt hoeveel medium pizza's de persoon wilt en slaat het op
mediumpizza = parseInt(prompt('hoeveel medium pizza\'s wilt u')); 
	document.write('<br><br> Medium pizza\'s'); // zet de text small pizza op het scherm
	document.write('<br> Aantal: ' + mediumpizza); // zet het aantal op het scherm
	document.write('<br> Prijs: €' + (mediumpizza * pricemedium)); // zet de totaal prijs van de pizza op het scherm

// vraagt hoeveel large pizza's de persoon wilt en slaat het op
largepizza = parseInt(prompt('hoeveel large pizza\'s wilt u')); 
	document.write('<br><br> Large pizza\'s'); // zet de text small pizza op het scherm
	document.write('<br> Aantal: ' + largepizza); // zet het aantal op het scherm
	document.write('<br> Prijs: €' + (largepizza * pricelarge)); // zet de totaal prijs van de pizza op het scherm
 
// slaat de totaal prijs van de verschillende pizza's op
var totalsmall = smallpizza * pricesmall 
var totalmedium = mediumpizza * pricemedium 
var totallarge = largepizza * pricelarge 

// rekent de totaal prijs uit en laat het zien
document.write('<br><br> Totaal prijs'); // zet de text totaal prijs op het scherm
document.write('<br> €' + (totalsmall + totalmedium + totallarge)); // rekent de totaal prijs van alle pizza's bij elkaar op