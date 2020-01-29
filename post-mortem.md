# Project Post Mortem

## Current Project Status

### Web interface

 This only works with the data provided in a static file

### Console

 A RepaymentService class is exposed in the  console, it works with arbitrary data formatted in the same was as the sample data
 To run it with the provided sample data do this in the browser console

``` javascript
 const service = new RepaymentService(sampleData.CustomerSummaries);
 service.uploadPayments(sampleData.RepaymentUploads);
 service.printRepayments();
```

### Tests

 TDD at the unit level was used for everything except  the Console interface. There are no UI or integration tests. To create a test coverage report run:

``` bash
npm run test:coverage
```

### Linting

 Code quality is enforced using eslint and airbnb’s react rules

``` bash
npm run lint
```

## Estimate on Outstanding Work

* Integration tests 1-2 hours
* Support for actual uploads 1-2 hours
* General optimisations including improving test coverage and correcting linting errors 1-2 hours
* UI enhancements including stretch goal 3-4 hours

## What went well

TDD and functional programming made the technical specifications fairly easy to implement

## What could have gone better

* Forgot about the Service class deliverable till late
* I should have asked whether the class had to be a class given I’m using a functional approach
* Got caught up in UI work, should have stuck to writing tests for the deliverables first.

## Improvements/Enhancements

* In the UIs Ids could be replaced with more descriptive names of what they represent
* Allow for actually uploading new payments information
* Test with more data
* Add sorting, searching and filtering

