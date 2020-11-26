window.onload = function() {
    let url = 'http://localhost:8000/address/?postcode=';
    let fieldsets = document.getElementsByTagName('fieldset');
    for (let foo in fieldsets) {
        if (fieldsets[foo].className ==  'address') {
            let textareas = fieldsets[foo].getElementsByTagName('textarea');
            for (let bar in textareas) {
                if (textareas[bar].className == 'address') {
                    fieldsets[foo].address = textareas[bar];
                    break;
                }
            }
            if (fieldsets[foo].address) {
                let inputs = fieldsets[foo].getElementsByTagName('input');
                for (let bar in inputs) {
                    if (inputs[bar].className == 'lookup') {
                        inputs[bar].http = new XMLHttpRequest();
                        inputs[bar].working = false;
                        inputs[bar].onclick = lookupAddress;
                    }
                    if (inputs[bar].className == 'postcode') {
                        fieldsets[foo].postcode = inputs[bar];
                    }
                }
            } else {
                alert('No address textarea defined within address fieldset!');
            }
        }
    }
    function lookupAddress() {
        if (!this.working) {
            let http = this.http;
            let address = this.parentNode.address;
            this.http.open('GET', url + escape(this.parentNode.postcode.value), true);
            this.http.onreadystatechange = (function() {
                if (http.readyState == 4) {
                    this.working = false;
                    address.innerHTML = http.responseText;
                }
            }).bind(this);
            this.http.send(null);
            this.working = true;
        }
    }
}