import { qs, on } from "./helpers.js";

export default class Exit {
    constructor() {
        qs(".exit");

        this.logoutBtn = qs("#logout-btn")

        this.bindEvents();
    }

    bindEvents() {
        on(this.logoutBtn, "click", () => this.logOut());
    }

    logOut() {
        window.location.href="../index.html";
    }
}