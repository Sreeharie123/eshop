export interface orderInterface{
userId:string,
products:[{
    productId:string,
    quantity:number
}],
amount:number
address:object,
status:string
}
