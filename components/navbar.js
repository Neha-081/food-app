function navbar(){
    return `  <div class="container">
    <h1>Receipe Finder</h1>
    <div class="flex">
        <form class="flex" id="submit">
            <input type="text" id="search" placeholder="Search for Meal">
            <button class="search-btn" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
        <button class="random-btn" id="random">
            Get Receipe of the day
        </button>
        <button class="random-btn" id="random"><a href="latest.html">
            Show Latest Receipe</a>
        </button>
    </div>

    <div class="result-heading"></div>
    <div id="meals" class="meals"></div>
    <div id="single-meal"></div>
</div>`
}

export default navbar
