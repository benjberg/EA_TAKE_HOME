export const GetChartData = (data) => {
      //loop though our responses seperating them into key value pairs and pushingthem into new array for donut chart data
    const tempArray= []
    for( const property in data){
        let seperatedData = {x: property, y: data[property] }
        tempArray.push(seperatedData)
}
return tempArray
}