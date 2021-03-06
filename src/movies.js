// Iteration 1: All directors? - Get the arr of all directors.

function getAllDirectors(arr) {
    let filmDirectors = arr.map(function(movie) {
        return movie.director
    })
 return filmDirectors

}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the arr of directors. How could you "clean" a bit this arr and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let spielbergDrama = arr.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return spielbergDrama.length 
} 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) 
    return 0;
    let allRates = arr.reduce(function(sum, elem){
        return sum += elem.rate || 0;
    },0)
    let myAverage = allRates / arr.length; 
    return Number(myAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaAvg = arr.filter(function(movie) {
        return movie.genre.includes("Drama")
    })
    return ratesAverage(dramaAvg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const moviesByYear = arr.slice().sort(function(a, b) {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        if (a.year === b.year) {
            if (a.title > b.title)
            return 1
        }
        if (a.title < b.title){
            return -1
        }
    })
    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const orderedList = arr.map(movie => movie.title).sort()

    return orderedList.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
