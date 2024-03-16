


 export function dateConverter(fullname:string){
    const year = fullname.slice(0,4);
    const month = fullname.slice(6,7);
    const day = fullname.slice(8,10);
    const monthsChar = {
        1:"January",
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December"
    }
    const finalMOnth = parseInt(month);
    let finalDate;
    if(day.endsWith("12")||day.endsWith("13")||day.endsWith("11")){
        //@ts-ignore
         finalDate = `${day}th ${monthsChar[finalMOnth]},${year} `;
    }
    else{

        const finalDay = `${day.endsWith("2")?`${day}nd`:`${day.endsWith("3")?`${day}rd`:`${day.endsWith("1")?`${day}st`:`${day}th`}`}`}`;
         //@ts-ignore
         finalDate = `${finalDay} ${monthsChar[finalMOnth]},${year} `;
    }
    return finalDate;

}