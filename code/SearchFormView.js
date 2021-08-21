import { qs, on } from "./helpers.js";

export default class SearchForm{
    constructor() {
        qs(".search-form-group");

        this.searchform = qs("#search-form");
        this.inputElement = qs("[type=search]", this.element);
        this.searchBtn = qs("#search-btn");

        this.showSearchForm(false);
        this.bindevents();
    }

    showSearchForm(visible = true) {
        this.searchform.style.display = visible ? "block" : "none";
    }

    bindevents() {
        on(this.searchBtn, "click", () => this.handleClick());
    }

    handleClick() {
        if(this.searchform.style.display = "none") {
            this.showSearchForm(true);
        } else {
            this.showSearchForm(false);
        }
    }

}