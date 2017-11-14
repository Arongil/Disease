function read_csv(filename) {
  const raw_file = new XMLHttpRequest();
  raw_file.open('GET',filename,true);
  raw_file.onreadystatechange = function(){
    if(raw_file.readyState === 4 && [0,200].includes(raw_file.status)){
      const allText = raw_file.reponseText;
    }
  };
}
