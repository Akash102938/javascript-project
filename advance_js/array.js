// function sendWelcomeEmaail(email){
//     console.log(`Welcome email sent to ${email}`);
// }

// const users=[
//     {name: 'Alice', email: 'alice@example.com'},
//     {name: 'Bob', email: 'bob@example.com'},
//     {name: 'Charlie', email: 'charlie@exaple.com'}
// ]

// users.forEach((user)=> {
//     sendWelcomeEmaail(user.email)
// })


const products = [{name: 'laptop', price: 1000},
    {name: 'smartphone', price: 500},
    {name: 'tablet', price: 300}
]
products.map((product)=>{
    console.log(`The price of ${product.name} is ${product.price}`);
    
})


