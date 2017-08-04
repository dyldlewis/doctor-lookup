var apiKey = require('./../.env').apiKey;

function Doctor(name){
this.name = name;
}


Doctor.prototype.getDoctors = function(symptom) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(symptom)
      console.log(apiKey);
      console.log(result.data[0].profile.bio);

    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
