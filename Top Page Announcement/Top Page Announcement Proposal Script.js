// Written in JavaScript
// TO CHANGE VALUES, EDIT ONLY BETWEEN QUOTATION MARKS

// Destination address
var cToAddr = "editorial-secretariat@europarl.europa.eu";

// Alert when a required field is not filled in
var alertText = "Please correct or fill in the following fields before submitting:\n";

// Subject
var subjectName = this.getField("Committees").value;
var cSubLine = "Top Page Announcement Proposal by " + subjectName;

// Body
var cBody = "Please do not delete anything from the information in the body of this email or from the subject line.\nYou can add email addresses in the 'To' or 'Cc' field. \nYou can also write us an extra message in the body of this email, but please make sure it is clearly visible.\nClick 'Send' to submit your proposal.\n\n";

// General info
cBody += "-----FORM DATA BELOW-----";
cBody += "\n";

if (this.getField("Committees").value === "") {
    alertText += "Committee(s)\n";
} else {
    cBody += this.getField("Committees").value;
    cBody += "\n";
}

if (this.getField("Announcement").value === "") {
    alertText += "Announcement\n";
} else {
    cBody += this.getField("Announcement").value;
    cBody += "\n";
}

if (this.getField("Photo_reference").value === "") {
    alertText += "Photo reference\n";
} else {
    cBody += this.getField("Photo_reference").value;
    cBody += "\n";
}

// Procedure file
if (this.getField("Link_to_Procedure_file").value != "") {
    cBody += this.getField("Link_to_Procedure_file").value;
    cBody += "\n";
} else {
    cBody += "No link to Procedure file provided.";
    cBody += "\n";
}
// Further info
if (this.getField("Further_information").value != ""){

    cBody += this.getField("Further_information").value;
    cBody += "\n";
    cBody += this.getField("Link").value;
    cBody += "\n";
}
if (this.getField("Further_information_2").value != ""){

    cBody += this.getField("Further_information_2").value;
    cBody += "\n";
    cBody +=  this.getField("Link_2").value;
    cBody += "\n";
}
if (this.getField("Further_information_3").value != ""){

    cBody += this.getField("Further_information_3").value;
    cBody += "\n";
    cBody += this.getField("Link_3").value;
    cBody += "\n";
}
if (this.getField("Further_information_4").value != ""){

    cBody += this.getField("Further_information_4").value;
    cBody += "\n";
    cBody += this.getField("Link_4").value;
    cBody += "\n";
}
// No further info
if (this.getField("Further_information").value === ""
    && this.getField("Further_information_2").value === ""
    && this.getField("Further_information_3").value === ""
    && this.getField("Further_information_4").value === "") {

    cBody += "No further information provided.";
}

// Alert popup when required fields are not filled in
if (this.getField("Committees").value === ""
    || this.getField("Announcement").value === ""
    || this.getField("Photo_reference").value === "") {
    
        app.alert(alertText, 1, 0);
}
// Send to mail; DO NOT CHANGE
else {
    this.mailDoc({
        cTo: cToAddr, cSubject: cSubLine, cMsg: cBody
    });
}
