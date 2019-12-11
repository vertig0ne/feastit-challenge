# Feast It Challenge

Challenge product issued by Feast It.

## Specifications

Build an Express server to create an API using a specified dataset from a postgres database.

```
Use dataset at: https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat
URL: /api/v1/suggestions
Params: q, [latitude, longitude]
Return: JSON Array
Time Constraint: 4-6 hours
Deploy to Public URL
```

## Design Decisions

 - Due to the scope of this project, controllers will also contain logic that should be in the model/data layer.
   This decision also makes testing difficult however according to specifications were optional
 - Docker build envrionment, deploying to a public url made sense to make sure there was a local docker build that
   could be tested to ensure compatibility
   