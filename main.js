import {createInterface} from 'readline';
import {sum,subtration,multiplication,disivion,power,root} from './operations.js';

const rl=createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Escreva um numero: ", (num1)=>{
    rl.question("Escolha uma operação:\n[+],[-],[*],[/],[**],[//] ", (operations)=>{
        rl.question("Escreva um numero: ", (num2)=>{

            num1=Number(num1);
            num2=Number(num2);

            let result=null;

            switch(operations){
                case '+':
                    result=sum(num1,num2);
                    break;
                case '-':
                    result=subtration(num1,num2);
                    break;

                case '*':
                    result=multiplication(num1,num2);
                    break;

                case '/':
                    result=disivion(num1,num2);
                    break;

                case '**':
                    result=power(num1,num2);
                    break;

                case '//':
                    result=root(num1,num2);
                    break;
            }
            console.log("Resultado: ",result);

            rl.close();
    
        });
    });
});