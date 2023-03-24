function formatPhones(tel) {
  let formattedTel = tel;

  const addPlus = new RegExp("^([0-9])");
  const leaveDashesAndStaples = new RegExp("([- _()])", "g");

  formattedTel = formattedTel.replace(addPlus, "+$1");
  formattedTel = formattedTel.replace(leaveDashesAndStaples, "");
  return formattedTel.replace(/^\+89/, "+79");
}

export default formatPhones;
