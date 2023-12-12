import * as fs from 'fs'

fs.writeFile('./newFile.txt', '', (error) => {
    if(error){
        console.log(error);
    } else {
        console.log('file created successfully');
        
    }
});



