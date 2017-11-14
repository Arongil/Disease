function mapData() {
  var data;
  Papa.parse(
    './resources/map-data.csv',{
      'worker':true,
      'complete':function(results){
        data = results.data;
      }
    }
  );
  return data;
}
