const form = document.getElementById("f");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (nameInput.value === "" || ageInput.value === "") {
        alert("Please enter valid details.");
        return;
    }

    const userName = nameInput.value;
    const userAge = Number(ageInput.value);

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (userAge > 18) {
                resolve();
            } else {
                reject();
            }

        }, 4000);

    });

    promise
        .then(() => {
            alert(`Welcome, ${userName}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${userName}. You aren't old enough.`);
        });

});