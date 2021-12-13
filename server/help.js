import fs from 'fs';
export function help(){
    let rawdata = fs.readFileSync(`${__dirname}/Help.json`);
    let data =JSON.parse(rawdata).HELP;
        let answer = " ---Commands not found---\n";
        for (const [key, value] of Object.entries(data)){
            answer += `${key} : ${value} \n`;
        }
        return answer
}