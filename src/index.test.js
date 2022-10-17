import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("t1", () =>{
  it("should pass", () => {
    expect(true).to.equal(true);
  })
})

describe("index.html", ()=>{
  it("should say hello adam", ()=>{
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementById("hello-header");
    expect(h1.innerHTML).to.equal("Hello Adam!");
    dom.window.close();
  })
});
