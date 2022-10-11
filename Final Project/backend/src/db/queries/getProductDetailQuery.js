export default `
SELECT
p.id,
p.product_name,
p.price,
p.in_stock,
p.description,
p.category,
p.created_at,
p.rating,
p.updated_at,
STRING_AGG(pi.image_url, ',') AS images
FROM product p
LEFT JOIN product_images pi ON pi.product_id = p.id
WHERE p.id = :productId
GROUP BY p.id, p.product_name,p.created_at
`;