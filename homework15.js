

// 3d 6h
// less then an hour (mai putin de o ora)
// 2h 4min
// 1d 5h
// 2w 6d
// 1month 2w

// console.log(countBe / 2)
// console.log(5 % 2)

const countBe = 45700;
const min = 1;
const hour = 60;
const day = 1440;
const week = 10080;
const month = 40320;

if (countBe / month >= 1) {

    const months = countBe / month
    const weeksInMinutes = countBe % month

    console.log(`${Math.floor(months)}m ${Math.floor(weeksInMinutes / day)}w`)

    console.log('more then one month')

}
 if (countBe / week >= 1) {

    // const weeks = countBe / week
    const daysInMinutes = countBe % week

    console.log(`${Math.floor(daysInMinutes / day)}d`)

    console.log('more then one week')

}
 if (countBe / day >= 1) {

    // const days = countBe / day
    const hoursInMinutes = countBe % day

    console.log(`${Math.floor(hoursInMinutes / hour)}h`)

    console.log('more then one day')

}  
if (countBe / hour >= 1) {

    const minutes = countBe % hour
    console.log(`${Math.floor(minutes / min)}m`)
    console.log('more then one hour')

}
else {
    console.log('less then an hour')
}