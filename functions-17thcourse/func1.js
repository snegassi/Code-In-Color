

// Calculate the total cost of tile needed in an area ??

//helper function to calculate Area

function calculateArea (length,width){
    return length*width
}

// helper function to calculate tile cost

function calculateTileCost(area,tileCost){
    return area * tileCost
}


// Main function to calculate total cost
function calculateTheTotalCost(length,width,tilePricePerSqft){
    let area= calculateArea(length.width);
    let totalCost= calculateTileCost(area,tileCost)
    return totalCost;
}

//  Example usage
let bathroomLength=10;
let bathroomWidth=8;
let tilePricePerSqft=5;

let totalTileCost=calculateTheTotalCost(bathroomLength,bathroomWidth,tilePricePerSqft);
console.log(`Total cost to replace bathroom tile:$${totalTileCost}`);