// code your solution here

function saturdayFun(joy= "roller-skate"){
    return `This Saturday, I want to ${joy}!`;
}
saturdayFun();


const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair ="*"){
    return function(adjective = "spacial"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}