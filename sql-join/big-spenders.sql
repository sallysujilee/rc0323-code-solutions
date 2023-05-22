select "amount" as "payment",
       "firstName",
       "lastName"
      from "payments"
    join "customers" using ("customerId")
  order by "amount" DESC
  Limit 10;
