import { spinner } from  '../assets/images/spinner.gif';
const showSpinner = (value) => {

    const spinnerContainer = document.querySelector('.loading-spinner');
    (value) ? spinnerContainer.style.display = 'none' : spinnerContainer.style.display = 'block';
}

export { showSpinner }