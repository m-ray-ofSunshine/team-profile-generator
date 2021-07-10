const Employee = require("../lib/Employee")

describe("Employee", ()=> {
    describe("getName", ()=>{
        it("should return the name", ()=>{
            const newEmp = new Employee("Matt", 45, "mray@gmail.com")
            expect(newEmp.getName()).toEqual("Matt")
        })
    })
    describe("getId", ()=>{
        it("should return the ID number",()=>{
            const newEmp = new Employee("Matt", 45, "mray@gmail.com")
            expect(newEmp.getId()).toEqual(45)
        })
    })
    describe("getEmail", ()=>{
        it("should return the email address",()=>{
            const newEmp = new Employee("Matt", 45, "mray@gmail.com")
            expect(newEmp.getEmail()).toEqual("mray@gmail.com")
        })
    })
    describe("getRole", ()=>{
        it("should return the assigned role",()=>{
            const newEmp = new Employee("Matt", 45, "mray@gmail.com")
            expect(newEmp.getRole()).toEqual("Employee")
        })
    })
})