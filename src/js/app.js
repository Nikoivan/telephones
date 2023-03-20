function formatPhones(tel) {
  let formattedTel = tel;

  formattedTel = formattedTel.replace(/^([0-9])/, '+$1');
  formattedTel = formattedTel.replace(/([- _()])/g, '');
  return formattedTel.replace(/^\+89/, '+79');
}

export default formatPhones;
