-- Write an SQL query to find the ids of products that are both low fat and recyclable.

/*
    Schema:

    Create table If Not Exists Products (product_id int, low_fats ENUM('Y', 'N'), recyclable ENUM('Y','N'))
    Truncate table Products
    insert into Products (product_id, low_fats, recyclable) values ('0', 'Y', 'N')
    insert into Products (product_id, low_fats, recyclable) values ('1', 'Y', 'Y')
    insert into Products (product_id, low_fats, recyclable) values ('2', 'N', 'Y')
    insert into Products (product_id, low_fats, recyclable) values ('3', 'Y', 'Y')
    insert into Products (product_id, low_fats, recyclable) values ('4', 'N', 'N')
*/
SELECT product_id FROM products WHERE low_fats = 'Y' AND recyclable = "Y";