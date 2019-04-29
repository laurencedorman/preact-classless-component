import { h } from "preact";
import render from "preact-render-to-string";

import createComponent from "./index.js";

describe("createComponent", () => {
  it("Should be a function", () => {
    expect(typeof createComponent).toBe("function");
  });

  it("Should create a component", () => {
    const Test = createComponent({
      render() {
        return h("div", null, "Hello world");
      }
    });

    const output = render(h(Test));

    expect(output).toEqual("<div>Hello world</div>");
  });
});
