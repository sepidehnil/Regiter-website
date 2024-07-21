export const validators = {
  nameValidate: /^[\u0600-\u06FF\s]*$/,
  nationalIdValidate: /^\d{0,10}$/,
  phoneNumberValidate: /^0\d{0,10}$/,
  dayValidate: /^(0\d{0,1}|[12][0-9]{0,1}|3[01]{0,1})?$/,
  monthValidate: /^(0\d{0,1}|1[012]{0,1})?$/,
  yearValidate: /^(13[0-9]{0,2}|14?[0-3]{0,2})?$/,
};

// export const errorsdalidator = {
//   firstName: !/^[\u0600-\u06FF\s]+$/,
//   lastName: !/^[\u0600-\u06FF\s]+$/,
//   nationalId: values.nationalId.length !== 10,
//   phoneNumber: !/^0\d{10}$/,
//   day: !/^(0[1-9]|[12][0-9]|3[01])$/,
//   month: !/^(0[1-9]|1[012])$/,
//   year: !(values.year >= 1300 && values.year <= 1403),
// };
