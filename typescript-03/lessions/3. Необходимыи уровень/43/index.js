{
    var forms = document.querySelectorAll('form');
    var email_1 = document.querySelector('#email');
    var title_1 = document.querySelector('#title');
    var text_1 = document.querySelector('#text');
    var checkbox_1 = document.querySelector('#checkbox');
    var formData_1 = {
        email: '',
        title: '',
        text: '',
        checkbox: false,
    };
    forms.forEach(function (form) {
        return form.addEventListener('submit', function (e) {
            var _a, _b, _c, _d;
            e.preventDefault();
            // Можно и создавать другой объект для соблюдения иммутабельности, но пока не обязательно
            formData_1.email = (_a = email_1 === null || email_1 === void 0 ? void 0 : email_1.value) !== null && _a !== void 0 ? _a : '';
            formData_1.title = (_b = title_1 === null || title_1 === void 0 ? void 0 : title_1.value) !== null && _b !== void 0 ? _b : '';
            formData_1.text = (_c = text_1 === null || text_1 === void 0 ? void 0 : text_1.value) !== null && _c !== void 0 ? _c : '';
            formData_1.checkbox = (_d = checkbox_1 === null || checkbox_1 === void 0 ? void 0 : checkbox_1.checked) !== null && _d !== void 0 ? _d : false;
            if (validateFormData(formData_1)) {
                checkFormData(formData_1);
            }
        });
    });
    function validateFormData(data) {
        // Если каждое из свойств объекта правдиво...
        if (Object.values(data).every(function (value) { return value; })) {
            return true;
        }
        else {
            console.log('Please, complete all fields');
            return false;
        }
    }
    function checkFormData(data) {
        var email = data.email;
        var emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com'];
        if (emails.some(function (e) { return e === email; })) {
            console.log('This email is already exist');
        }
        else {
            console.log('Posting data...');
        }
    }
}
