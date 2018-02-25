import { db } from './firebase'

// Add new user's displayName
export const doCreateUser = (uid, displayName) =>
  db.ref(`users/${uid}`).set({
    displayName,
  })

// Get the userData
export const getUserData = uid =>
  db.ref(`users/${uid}`).once('value')

// set the current budget year
export const doSetBudgetYear = (uid, budgetYear) =>
  db.ref(`users/${uid}`).child('budgetYear').set(budgetYear)

// set the current budget month
export const doSetBudgetMonth = (uid, budgetMonth) =>
  db.ref(`users/${uid}`).child('budgetMonth').set(budgetMonth)

// get a budget
export const doGetBudgetInformation = (uid, budgetMonth, budgetYear) =>
  db.ref(`users/${uid}/budget/${budgetYear}${budgetMonth}`).once('value')

// init a budget
export const doInitBudgetInformation = (uid, budgetMonth, budgetYear, struct) =>
  db.ref(`users/${uid}/budget`).child(budgetYear + budgetMonth).set(struct)

export const doUpdateBudgetInputGroup = (uid, budgetMonth, budgetYear, uuid, struct) =>
  db.ref(`users/${uid}/budget/${budgetYear}${budgetMonth}/income`)
    .child(uuid).set(struct)
