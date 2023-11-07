
const expect = ( val ) => ({
    toBe: (valToBe) => {
        if(valToBe === val) return true
        throw new Error("Not Equal")
    },
    notToBe: (valToNotBe) => {
        if(valToNotBe !== val) return true
        throw new Error("Not Equal")
    }
})

//leetcode test
/*
    52ms       |    41.57mb
    50.67%     |    82.17%
 */



    