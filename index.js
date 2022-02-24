// code your solution here

/*---------------------------------------------------------------------------------------
defines saturdayFun function declaration as specified
      ✓ function exists
      ✓ uses the default activity 'roller-skate' when no arguments are passed
      ✓ permits the default activity to be overriden
*/

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

/*---------------------------------------------------------------------------------------
defines mondayWork function expression as specified
      1) function exists
      2) uses the default activity 'go to the office' when no arguments are passed
      3) permits the default activity to be overriden
*/

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

/* ---------------------------------------------------------------------------------------
Implement a function called wrapAdjective:

It should return a function
This "inner" function should:
take a single parameter that should default to "special". Name it however you wish.
return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")

Thus a total call should be:

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
*/
function wrapAdjective(flair = '*'){
    return function word(adj = 'special'){
        return  `You are ${flair}${adj}${flair}!`
    }
}

    