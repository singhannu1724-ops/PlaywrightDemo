 const{test,expect} =require('@playwright/test')

 test.skip("My first test",async function({page}){
    expect(12).toBe(10) 
})

  test("My second test",async function({page}){
    expect(2.0).toBe(2.0)
 })
  test("My third test",async function({page}){
    expect(200).toBe(200)
 })
  test("My fourth test",async function({page}){
    expect("Anamika singh").toContain("Anamika")
    expect(true).toBeTruthy()
 })
test("My fifth test",async function({page}){
    expect(false).toBeFalsy()
 })
test("My sixth test",async function({page}){
    expect("Anamika singh".includes("Anamika")).toBeTruthy()
 })

