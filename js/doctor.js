var apiKey = require('./../.env').apiKey;

function Doctor(first, last, bio){
this.firstName = first;
this.lastName = last;
this.bio = bio;
}


Doctor.prototype.getDoctors = function(symptom, displayDoctors) {
  var doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      for (i = 0; i < result.data.length; i++) {
        doctor = new Doctor(result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.bio);
        doctors.push(doctor)
      }
      console.log(doctors);
      displayDoctors(doctors)
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
