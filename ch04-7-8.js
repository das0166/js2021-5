let output = "";
//예제 4-7
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i + 1; j++) {
        output += "*";
    }
    output += "\n";
}




let y = 0;
for (let i = 0; i < 18; i = i + 2) {


    for (let x = 0; x < 8 - y; x++) {
        output += " ";
    }

    for (let j = 0; j < i + 1; j++) {
        output += "*";
    }


    output += "\n";
    y = y + 1;
}

let y2 = 0;
for (let i = 0; i < 18; i = i + 2) {


    for (let x = 0; x < 8 - y2; x++) {
        output += " ";
    }
    for (let j = 0; j < i + 1; j++) {




        output += "*";
    }


    output += "\n";
    y2 = y2 + 1;
}

let y3 = 9;
for (let i = 14; i >= 0; i = i - 2) {


    for (let x = 0; 10 - x > y3; x++) {
        output += " ";
    }

    for (let j = 0; j < i + 1; j++) {
        output += "*";
    }


    output += "\n";
    y3 = y3 - 1;
}
console.log(output);

