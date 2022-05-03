jQuery(document).ready(function () {
    var $inputTell = document.querySelectorAll(".wp-sms-input-mobile, #wp-sms-input-mobile, .user-mobile-wrap #mobile");

    for (var i = 0; i < $inputTell.length; i++) {
        if ($inputTell[i]) {
            $inputTell[i].setAttribute('dir', 'ltr')

            window.intlTelInput($inputTell[i], {
                onlyCountries: wp_sms_intel_tel_input.only_countries,
                preferredCountries: wp_sms_intel_tel_input.preferred_countries,
                autoHideDialCode: wp_sms_intel_tel_input.auto_hide,
                nationalMode: wp_sms_intel_tel_input.national_mode,
                separateDialCode: wp_sms_intel_tel_input.separate_dial,
                utilsScript: wp_sms_intel_tel_input.util_js
            });
        }
    }

    var $inputTell = document.querySelector("#job_mobile, #_job_mobile");

    if ($inputTell && !$inputTell.getAttribute('placeholder')) {
        $inputTell.setAttribute('dir', 'ltr')

        window.intlTelInput($inputTell, {
            onlyCountries: wp_sms_intel_tel_input.only_countries,
            preferredCountries: wp_sms_intel_tel_input.preferred_countries,
            autoHideDialCode: wp_sms_intel_tel_input.auto_hide,
            nationalMode: wp_sms_intel_tel_input.national_mode,
            separateDialCode: wp_sms_intel_tel_input.separate_dial,
            utilsScript: wp_sms_intel_tel_input.util_js
        });
    }

});