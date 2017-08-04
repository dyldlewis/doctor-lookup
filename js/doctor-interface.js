var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function (doctors) {
  for(i = 0; i < doctors.length; i++) {
    $("#results").append("<li>" + doctors[i] + "</li>");
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
