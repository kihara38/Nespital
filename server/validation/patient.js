const Validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateDoctorInput(data) {
  let errors = {};

  data.HPN = !isEmpty(data.HPN) ? data.HPN : "";
  data.Height = !isEmpty(data.Height) ? data.Height : "";
  data.Weight = !isEmpty(data.Weight) ? data.Weight : "";
  data.DoB = !isEmpty(data.DoB) ? data.DoB : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.company)) {
    errors.company = "company field is required";
  }
  if (validator.isEmpty(data.title)) {
    errors.title = "job title field is required";
  }
  if (validator.isEmpty(data.from)) {
    errors.from = "from date field is required";
  }

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
