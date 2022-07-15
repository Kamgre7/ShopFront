## Megak_shop - frontend 

#### Megak_shop is a shop application created using React + chakra ui + typescirpt. Code was formetted using eslint with airbnb-typescript configuration. 

### Features:

#### - Navigation bar - all links are visible now




![image](https://user-images.githubusercontent.com/105069884/179229853-15c01d39-6514-4f12-abdb-46f572e5259c.png)




#### - products view - you can see all products added to shop using product form. View is like "cards view"




![image](https://user-images.githubusercontent.com/105069884/179225950-6a459b2e-ea6c-4338-a44a-daf2415b187a.png)




#### - single product view - when user click some product, he will see details of prodct like: name, description, quantity, price, sku code, which category, image and button "add to cart" which will add item to your basket. 




![image](https://user-images.githubusercontent.com/105069884/179226602-1dc965a8-974b-49ab-be4f-e9fbc5c189d1.png)




#### After clicking button user hava information about product added to basket:




![image](https://user-images.githubusercontent.com/105069884/179227227-87209af2-7393-440f-a954-23beb00527ad.png)




#### - product form - created with chakra ui + formik implementation - all inputs are required when user want to add product




![image](https://user-images.githubusercontent.com/105069884/179228510-ff4bba46-dbd8-4dff-a17a-0a3c11700405.png)




#### After added product user receives feedback about the completed adding of the product. Input Quantity and Price can only be numbers. Form have validation about name - if is used, producnt will not be added to shop.




![image](https://user-images.githubusercontent.com/105069884/179229228-89f84979-af1f-43a4-bdea-5c477c40f1d3.png)




#### - categories view - all categories with description and image




![image](https://user-images.githubusercontent.com/105069884/179230173-8c75bd7f-e88f-44c1-9b32-1315c61949a3.png)




#### - categories form  - created with chakra ui + formik implementation - all inputs are required when user want to add category. After added category user receives feedback about the completed adding of the product




![image](https://user-images.githubusercontent.com/105069884/179230675-56e0faed-9d5c-4b10-a471-b521095f940b.png)




#### - basket view - all products which user add to basket, with total amount and number of items in basket. He can delete some producs, and it will be recounted.




![image](https://user-images.githubusercontent.com/105069884/179239373-60aa404b-c334-478f-8f63-7c0ea4d6f852.png)




#### Deleting item: 



![image](https://user-images.githubusercontent.com/105069884/179241119-8d6e5cb8-8fd5-41a4-abdc-752d6d9d2f16.png)




#### - delete/-edit products - view where user can delete products from shop. There is a table of all items in shop, with details. Two buttons - delete and edit(in progress)




![image](https://user-images.githubusercontent.com/105069884/179241657-29eaebed-4c88-4980-952b-fa13d67df091.png)




#### - information when user delete product:



![image](https://user-images.githubusercontent.com/105069884/179241898-129b0113-79be-4696-9401-a092107f80b7.png)




### Technology:
- React.js
- React-router-dom
- formik
- typescript
- chakra ui
- code formatter: eslint with airbnb-typescript


### TODO
- register and login with JTW Authentication
- add user and admin role - only admin should delete/add products/categories
- add "edit" action on delete-edit product view
- sidebar for searching items by category/price/name
- order view - finalization of purchases
- ranking views - ranking of the most selling products
- upgrade validation
- refactor of components (less code in one component)





















