-- First, find the average number of orders
SELECT user_id
FROM orders
GROUP BY user_id
HAVING COUNT(order_id) > (
    SELECT AVG(order_count)
    FROM (
        SELECT COUNT(order_id) AS order_count
        FROM orders
        GROUP BY user_id
    ) AS subquery
);

