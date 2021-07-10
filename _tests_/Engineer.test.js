const Engineer = require("../lib/Engineer")

describe("Engineer", ()=> {
    describe("getName", ()=>{
        it("should return the name", ()=>{
            const newEng = new Engineer("Matt", 45, "mray@gmail.com", "m-ray-of-Sunshine")
            expect(newEng.getName()).toEqual("Matt")
        })
    })
    describe("getId", ()=>{
        it("should return the ID number",()=>{
            const newEng = new Engineer("Matt", 45, "mray@gmail.com", "m-ray-of-Sunshine")            
            expect(newEng.getId()).toEqual(45)
        })
    })
    describe("getEmail", ()=>{
        it("should return the email address",()=>{
            const newEng = new Engineer("Matt", 45, "mray@gmail.com", "m-ray-of-Sunshine")            
            expect(newEng.getEmail()).toEqual("mray@gmail.com")
        })
    })
    describe("getRole", ()=>{
        it("should return the assigned role",()=>{
            const newEng = new Engineer("Matt", 45, "mray@gmail.com", "m-ray-of-Sunshine")
            expect(newEng.getRole()).toEqual("Engineer")
        })
    })
    describe("getRole", ()=>{
        it("should return the Github Account",()=>{
            const newEng = new Engineer("Matt", 45, "mray@gmail.com", "m-ray-of-Sunshine")
            expect(newEng.getGithub()).toEqual("m-ray-of-Sunshine")
        })
    })
})