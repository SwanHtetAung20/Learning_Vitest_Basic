import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/vue";
import View from "../View.vue";

describe("View", () => {
  const textValue = "Hello This is text value";

  it("Render Text", async () => {
    const viewId = "viewId";
    render(View, {
      props: { element: "div", id: viewId },
      slots: { default: textValue },
    });
    const value = await screen.findByText(textValue);

    expect(value.innerHTML).toBe(textValue);
    expect(value.nodeName).toBe("DIV");
    expect(value.id).toBe(viewId);
  });

  it("Text snapshot", () => {
    const wrapper = render(View, {
      props: { element: "div" },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
