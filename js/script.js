`use strict`;

const openClass = `m-open`;
const showClass = `m-show`;

class App {
  constructor() {
    this.header = document.querySelector(`.js-header`);
    this.menuButton = this.header.querySelector(`.js-menu-button`);
    this.menuOpen = false;

    this.form = document.querySelector(`.js-form`);
    this.radioButtonList = this.form.elements[`setting-site`];
    this.passwordBlock = this.form.querySelector(`.js-form-password`);

    this.alert = document.querySelector(`.js-alert`);
    this.alertButton = this.alert.querySelector(`.js-alert-close`);
    this.alertShow = false;

    this._onMenuButtonClick = this._onMenuButtonClick.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onRadioButtonChange = this._onRadioButtonChange.bind(this);
    this._onAlertButtonClick = this._onAlertButtonClick.bind(this);
  }

  init() {
    this.menuButton.addEventListener(`click`, this._onMenuButtonClick);
    this.form.addEventListener(`submit`, this._onFormSubmit)
    this.radioButtonList.forEach((radioButton) => {
      radioButton.addEventListener(`change`, this._onRadioButtonChange);
    });
    this.alertButton.addEventListener(`click`, this._onAlertButtonClick);
  }

  _onMenuButtonClick(evt) {
    evt.preventDefault();

    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  _onFormSubmit(evt) {
    evt.preventDefault();

    if (!this.alertShow) {
      this.showAlert();
    }
  }

  _onRadioButtonChange(evt) {
    const value = evt.target.value;

    if (value === `protected-site`) {
      this.showPasswordBlock();
    } else {
      this.hidePasswordBlock();
    }
  }

  _onAlertButtonClick(evt) {
    evt.preventDefault();

    if (this.alertShow) {
      this.hideAlert();
    }
  }

  openMenu() {
    this.header.classList.add(openClass);
    this.menuOpen = true;
  }

  closeMenu() {
    this.header.classList.remove(openClass);
    this.menuOpen = false;
  }

  showPasswordBlock() {
    this.passwordBlock.classList.add(showClass);
  }

  hidePasswordBlock() {
    this.passwordBlock.classList.remove(showClass);
  }

  showAlert() {
    this.alert.classList.add(showClass);
    this.alertShow = true;

    setTimeout(() => {
      this.hideAlert();
    }, 10000);
  }

  hideAlert() {
    this.alert.classList.remove(showClass);
    this.alertShow = false;
  }
}

const app = new App();
app.init();