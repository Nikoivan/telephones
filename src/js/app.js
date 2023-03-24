function formatPhones(tel) {
  let formattedTel = tel;

  // const addPlus = new RegExp('^([0-9])');
  // const leaveDashesAndStaples = new RegExp('([- _()])', 'g');
  // const replaceFirstNumbers = new RegExp('^\+89');

  formattedTel = formattedTel.replace(/^([0-9])/, '+$1');
  formattedTel = formattedTel.replace(/([- _()])/g, '');
  return formattedTel.replace(/^\+89/, '+79');
}

export default formatPhones;
