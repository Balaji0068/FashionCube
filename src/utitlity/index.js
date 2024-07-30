export function getDiscountedPrice(originalPrice, discountPercentage){
    var discount=discountPercentage/100;
    var discountedPrice=originalPrice - originalPrice*discount;
    return discountedPrice.toFixed(2);
}