import { Component } from '@angular/core';

@Component({
    selector: 'app-admin',
    template: `
        <h2>Admin</h2>
        <div style="margin-bottom: 80px">
            <p>
                Welcome to the admin area.
            </p>
        </div>
    `,
})
export default class Admin {
    constructor() { }

}