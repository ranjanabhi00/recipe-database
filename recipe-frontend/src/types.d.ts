interface Recipe{
         id:string,
         name:string,
         description:string,
         calories:string,
         imageUrl?:string,
         ingredients?:Ingredient[]
}

interface Ingredient{
       name:string,
       quantity:string
}