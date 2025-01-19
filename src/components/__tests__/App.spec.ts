import { describe, it, expect, vi } from "vitest";
import App from "../../App.vue";
import View from "../View.vue";
import { mount } from "@vue/test-utils";
import Animals from "../Animals.vue";

describe("App View Component", () => {
  it.only("Render View Component", async () => {
    const wrapper = mount(App);

    console.log(wrapper.html());

    expect(wrapper.text()).toContain("Hello World.!");
    expect(wrapper.findComponent(View).vm.element).toBe("div");
    expect(wrapper.findComponent(View).props("element")).toBe("div");
    expect(wrapper.findComponent(View).text()).toContain(
      "This is View Component.!"
    );
    expect(wrapper.findComponent(Animals));

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    await button.trigger("click");
    console.log("Button clicked");
    expect(alertMock).toBeCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith("hello click mal");
    alertMock.mockRestore();
  });
});
