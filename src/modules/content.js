import { formatDate, getTime, getDay } from "./app";

const contentModule = async (data) => {

    const wrapper = document.querySelector(".container");

    let { localtime, name } = data.location; //DESTRUCTOR DATA TAKEN FROM API
    let { icon, text } = data.current.condition;
    let { temp_c, temp_f } = data.current

    const content =
        `
            <div class="text-content">
                <h1 class="col temperature-celcius">
                    ${temp_c}°
                </h1>
                <h1 class="col temperature-fahreneit hidden">
                    ${temp_f}F
                </h1>
                <div class="col location-time">
                    <h3 class="location">${name}</h3>
                    <div class="time">${getTime(localtime)} - ${getDay(localtime)}, ${formatDate(localtime)}</div>
                </div>
                <div class="col icon-descr">
                    <img src="${icon}" class="weather-icon" />
                    <div class="weather-description">${text}</div>
                </div>
            </div>

        `;
    wrapper.innerHTML = content;
};

export {contentModule}