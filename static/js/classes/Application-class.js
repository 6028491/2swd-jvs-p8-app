export class Application {
    constructor() {
        console.log('constucting new application');
        this.loggedIn = false;
        this.loginDialog = document.querySelector('#login-dialog')
        this.init();
    }


    init() {
        // Ask difference between load and DOMContentLoaded
        document.addEventListener("DOMContentLoaded", () => {
            this.checkLoggedIn();
        })


        // Opens the dialog when clicking login
        document.querySelector('.login').addEventListener('click', () => {
            // Uses .showModal to open the dialog
            // .open = true; works too tho
            console.log('opening login form');
            this.loginDialog.showModal();

            // adds an eventListener on closing the dialog.
            this.loginDialog.addEventListener('close', () => {
                console.log('Closing dialog and attempting to log in');
                this.logIn(document.querySelector('#login-email').value, document.querySelector('#login-password').value);
            })
        })
    }


    checkLoggedIn() {
        if (this.loggedIn == true) {
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.logout').style.display = 'inline';
            document.querySelector('.profile').style.display = 'inline';
        } else {
            document.querySelector('.login').style.display = 'inline';
            document.querySelector('.register').style.display = 'inline'
            document.querySelector('.logout').style.display = 'none';
            document.querySelector('.profile').style.display = 'none';
        }
    }

    logIn(username, password) {
        if(username && password){
            console.log('login sucsessfull!');
            this.loggedIn = true;
            this.checkLoggedIn();
        } else {
            console.log('bro... how?')
        }
    }
}
