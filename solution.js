const days = {
    0 : "Sun",
    1 : "Mon",
    2 : "Tue",
    3 : "Wed",
    4 : "Thu",
    5 : "Fri",
    6 : "Sat"
}

function solution(D) {
    let output = {};
    for(let k of Object.keys(D)) {
        let date = new Date(k);
        let currDay = date.getDay();
        if(output.hasOwnProperty(days[currDay])) {
            output[days[currDay]] = output[days[currDay]] + D[k];
        } else {
            output[days[currDay]] = D[k];
        }
    }

    
    for(let i = 0; i < 7; i++) {
        if(!output.hasOwnProperty(days[i])) {
            let prev = prevDay(i, output);
            let nxt = nextDay(i, output);
            let n;
            if((nxt -  i > 0)) {
                n = nxt - i;
            } else {
                n = 7 + nxt - i;
            }
            output[days[i]] = (n * (output[days[prev]]) + output[days[nxt]]) / (n+1);
        } else {
            output[days[i]] = output[days[i]];
        }
    }

    return output;
}

function prevDay(currDay, output) {
    for(let j = currDay - 1; j >= 0; j++) {
        if(output.hasOwnProperty(days[j])) {
            return j;
        }
    }
}

function nextDay(currDay, output) {
    for(let j = (currDay + 1)%7; ; j = (j+1) % 7 ) {
        if(output.hasOwnProperty(days[j])) {
            return j;
        }
    }
}

module.exports =  {solution, prevDay, nextDay, days};