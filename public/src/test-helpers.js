
// assert.isTrue(function) check method returns true or false
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Test passed')
    }
  }
};

// describe function for listing test name
const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

// same as above but it
const it = (msg, fn) => describe('  ' + msg, fn)

// match expression result to be whatever is passed in
const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass')
      return true
    } else {
      console.log('fail')
      return false
    }
  }
})

// expect expression then run matcher function
const expect = (exp) => matchers(exp)