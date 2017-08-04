var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $("#find_doctor").submit(function(event) {
    event.preventDefault();
    var symptom = $("#symptom").val();
    newDoctor = new Doctor("roger");
    newDoctor.getDoctors(symptom);
  });
});
