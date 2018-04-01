//Return true if the passed string is a valid US phone number.
//Valid Formats
// 555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555


//Basic Solution:
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
console.log(telephoneCheck("758-555-5555")); //OUTPUT: true

//Advanced Solution
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
console.log(telephoneCheck("758-555-5555")); //OUTPUT: true
