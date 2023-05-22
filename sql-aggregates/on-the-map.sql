select count(*), "countries"."name"
    from "cities"
  join "countries" using ("countryId")
  group by "countryId"
  order by count desc;
