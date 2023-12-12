//bash-scripting like simulaion

import touch from './touch'

const command = process.argv[2];
const path = process.argv[3];

if(command && path){
    switch (command){
        case 'touch': {
            touch(path);
            break
        }
        default: {
            console.log('unknown command');
        }
    } 
}else {
    console.log('command missing');
}
