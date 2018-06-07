Budget Tracker - Lab 2 (Combine Reducers and Selectors)
===

## Submission Instructions

* continue working from previous `LAB-1`
* submit a pull request to the project
  * **Use different source branch!**

## Requirements  

#### Feature Tasks 

##### expense
* in this app a expense should contain at least the following propertys
  * `id` a uuid
  * `categoryId` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `price` a number that is the total amount of $ in the category 
  * feel free to add more to your expense if you want

##### redux

###### combine reducers
* import all of your reducers into `store.js`
* import and use `combineReducers` from `redux` to combine all imported reducers into one reducer.
* Pass that reducer to the `createStore` call
* export the created store


###### expenses reducer
* add `CATEGORY_UPDATE` action to your reducer
* add new reducer `expensesByCategory` that should at least support the following interactions 
  * `EXPENSE_CREATE` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
  * Plus support `CATEGORY` actions as makes sense

###### action creators
* you should create an action creator for each interaction supported by your expenses reducer

##### Components
Create the following components and structure them according to the following diagram.  
``` 
Provider
  App
    Dashboard
      CategoryForm -- for creating categorys
      Categories -- list of categories
        Category Item -- display of category           
        CategoryForm  -- for updating categorys
        Expenses -- for list of expenses
          ExpenseForm -- for creating expenses
          [ExpenseItem]  -- list of expense items
            ExpenseForm -- for updating an expense
```

###### Update the CategoryItem Component

* should keep all of the features described in prior lab
* add an ExpenseForm to your category item that enables the user to create expenses on your app state
* You _can_ display list all the ExpenseItems belonging to the category


##### ExpenseForm Component 
* should be used to both add and update an expense

##### ExpenseItem Component 
* should have a button that will delete the expense `onClick`
* should display the `name` and `price` of the component
* should display, on demand, an ExpenseForm that will enable the user to update the expense in the app state

#### Test
* Test all of your action creators
* Test each reducer used in your apps combineReducers

####  Documentation  
Write a description of the project in your README.md
