var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function (doctors) {
  $("#results").empty()
  for(i = 0; i < doctors.length; i++) {
    $("#results").append("<img src=" + doctors[i].photo + ">", "<li class='person'>" + doctors[i].firstName + " " +  doctors[i].lastName + "</li>", "<p>" + doctors[i].bio + "</p><br>");
  }
}

$(document).ready(function() {
  $("#find_doctor").submit(function(event) {
    event.preventDefault();
    var symptom = $("#symptom").val();
    newDoctor = new Doctor("roger");
    newDoctor.getDoctors(symptom, displayDoctors);
  });
});
