export default `
SELECT
  o.id,
  o.customer_id,
  o.product_id,
  o.order_remarks,
  o.quantity,
  o.total,
  o.status,
FROM order o
`;