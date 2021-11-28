import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
let initialValue = 0;
export const allCarStats = {
    avgMpg: {city: mpg_data.reduce(
        (previousValue, currentValue) => previousValue + currentValue.city_mpg, initialValue) / mpg_data.length, 
        highway: mpg_data.reduce(
            (previousValue, currentValue) => previousValue + currentValue.highway_mpg, initialValue) / mpg_data.length},
    allYearStats: getStatistics(mpg_data.map(function(car) { return car["year"]; })),
    ratioHybrids: (mpg_data.filter(car => car.hybrid == true).length) / mpg_data.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */


 let hybridArray = mpg_data.filter(car => car.hybrid == true);
 let newArray = hybridArray.map(car => {return { make: car.make, id: car.id }});
 let hArray = [];
 function group(objectArray)
 let finalArray = hybridArray.reduce(function(previousValue, currentValue) {
   if(previousValue.make != currentValue.make) {
      hArray = [];
    }
    hArray.push(currentValue.id);
    return {"make": currentValue.make, "hybrids": hArray}
 });

/*
 function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
} */
 /*
 let hybridId = hybridArray.map(car => {return car.id});
 let hybridMake = hybridArray.map(car => {return car.make});
 let hybridGroup = groupBy(hybridArray, 'make'); */


//[{"make": makeList, "hybrids": }]
export const moreStats = {
  makerHybrids: "a",
  avgMpgByYearAndHybrid: finalArray
  
}

