let patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d-\.]+)@([a-z-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
};

let inputs = document.querySelectorAll("input");

validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else field.className = "invalid";
};

inputs.forEach(el => {
  el.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
