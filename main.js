// Buy a big lump of clay
// Use a pottery wheel to turn the clay into a bowl
// Put the bowl into a kiln for a bisque firing
// Apply glaze to bowl
// Put glazed bowl in kiln for final firing
// 💰💰💰 (haha, yeah right)

//define func buy clay , no para, returns empty obj
const buyClay = () => {
    let pottery = {}
    return pottery;
}


//var func makePottery 
const makePottery = (emptyObject) => {
    emptyObject.shape = 'Bowl'
    return emptyObject;
}


const bisqueFire = (emptyObject) => {
    emptyObject.readyForGlazing = true;
    return emptyObject;
}


const glazePottery = (emptyObject) => {
    if (emptyObject.readyForGlazing === true) {
        emptyObject.glazing = 'Midnight Blue'
    }
    else { console.log( `Make sure you bisque fire the 
   pottery before you glaze it`) 
    }
    return emptyObject
}


const finalFiring = (emptyObject, kilnTemp) => {
    if (kilnTemp > 1200) {
        emptyObject.cracked = true

    } else {
        emptyObject.cracked = false;
    }
    return emptyObject;
}

let acquiredClay = buyClay()
let make = makePottery(acquiredClay)
let firstFire = bisqueFire(make)
let applyGlaze = glazePottery(firstFire)
let bowlFire = finalFiring(applyGlaze, 1130)

console.log(bowlFire)



