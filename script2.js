let user = true;
const products = ["laptops", "phones", "monitors", "TVs"]
const prices = [450, 350, 300, 400]
sum = 0;
i = 0;
if (user == true){
    console.log("You are logged in!")
    for (const product in products) {
        console.log("Product:", products[product]);
    }
    for (const price in prices) {
        sum += prices[price]
        if (prices[price] == 400){
            console.log("Sum of Cart:", sum)
        }
    }
}

