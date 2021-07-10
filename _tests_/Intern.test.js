const Intern = require("../lib/Intern")

describe("Intern", ()=> {
    describe("getName", ()=>{
        it("should return the name", ()=>{
            const newInt = new Intern("Matt", 45, "mray@gmail.com", "University of Minnesota")
            expect(newInt.getName()).toEqual("Matt")
        })
    })
    describe("getId", ()=>{
        it("should return the ID number",()=>{
            const newInt = new Intern("Matt", 45, "mray@gmail.com", "University of Minnesota")            
            expect(newInt.getId()).toEqual(45)
        })
    })
    describe("getEmail", ()=>{
        it("should return the email address",()=>{
            const newInt = new Intern("Matt", 45, "mray@gmail.com", "University of Minnesota")            
            expect(newInt.getEmail()).toEqual("mray@gmail.com")
        })
    })
    describe("getRole", ()=>{
        it("should return the assigned role",()=>{
            const newInt = new Intern("Matt", 45, "mray@gmail.com", "University of Minnesota")
            expect(newInt.getRole()).toEqual("Intern")
        })
    })
    describe("School", ()=>{
        it("should return the school",()=>{
            const newInt = new Intern("Matt", 45, "mray@gmail.com", "University of Minnesota")
            expect(newInt.school).toEqual("University of Minnesota")
        })
    })
})