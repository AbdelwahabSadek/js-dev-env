import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("t1", () =>{
  it("should pass", () => {
    expect(true).to.equal(true);
  })
})

describe("index.html", ()=>{
  it("should have h1 that says Users", ()=>{
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementById("users-header");
    expect(h1.innerHTML).to.equal("Users");
    dom.window.close();
  })
});
