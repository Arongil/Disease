function readCSV(fname) {
  const reader = new FileReader();
  let result;
  reader.onload = function(e){
    result = reader.result;
  }
  reader.readAsText(fname);
  return result;
}
