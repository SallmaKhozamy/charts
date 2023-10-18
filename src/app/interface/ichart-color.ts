
export const labelColor:any=(chartOptionName:any,minMaxColor:string='#F1B547',defaultColor:string='#FFF')=>{
    let array = (chartOptionName as any).series[0].data;
     
    let max = Math.max(...array)
    let min = Math.min(...array)
    console.log(max);
    console.log(min); 
   
      let color =[]; 
     for( let i = 0; i<array.length; i++){ 
      if ((array[i]===(min )) || array[i]===(max ) ) {
       color.push(minMaxColor)// Max & Min label color 
     } else {
       color.push(defaultColor); // Default label color 
     } 
    }
      return color;
  }

  export const Color = (chartOptionName: any) => {
    let array = (chartOptionName as any).series[0].data;
       
    let max = Math.max(...array);
    let min = Math.min(...array);
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === min || array[i] === max) {
        return '#F1B547';
      } 
    }
  
    return '#fff'; // Add a return statement outside the loop for the default case
  };

