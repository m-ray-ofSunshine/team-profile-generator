const Manager = require("../lib/Manager")

describe("Manager", ()=> {
    describe("getName", ()=>{
        it("should return the name", ()=>{
            const newMgmt = new Manager("Matt", 45, "mray@gmail.com", 3)
            expect(newMgmt.getName()).toEqual("Matt")
        })
    })
    describe("getId", ()=>{
        it("should return the ID number",()=>{
            const newMgmt = new Manager("Matt", 45, "mray@gmail.com", 3)            
            expect(newMgmt.getId()).toEqual(45)
        })
    })
    describe("getEmail", ()=>{
        it("should return the email address",()=>{
            const newMgmt = new Manager("Matt", 45, "mray@gmail.com", 3)            
            expect(newMgmt.getEmail()).toEqual("mray@gmail.com")
        })
    })
    describe("getRole", ()=>{
        it("should return the assigned role",()=>{
            const newMgmt = new Manager("Matt", 45, "mray@gmail.com", 3)
            expect(newMgmt.getRole()).toEqual("Manager")
        })
    })
    describe("Office Number", ()=>{
        it("should return the office number",()=>{
            const newMgmt = new Manager("Matt", 45, "mray@gmail.com", 3)
            expect(newMgmt.officeNumber).toEqual(3)
        })
    })
})