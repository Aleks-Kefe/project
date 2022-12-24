
    <script>
        function check() {
            var password = document.getElementById('password').value
            var password2 = document.getElementById('password2').value
            var errorMessage = document.getElementById('error');
            var errorTOThrow = "";
            try {
                if (password.length < 6) {
                    errorTOThrow += "<br> password too short";

                }
                if (/[A-Z]/g.test(password) == false) {
                    errorTOThrow += "<br> password should include at least one capital letter";


                }
                if (/\d/g.test(password) == false) {
                    errorTOThrow += "<br> password should include at least one digit";


                }
                // checking if the two password are the same
                if (password != password2) {
                    // != means not equal to
                    errorTOThrow += "<br> password mismatched";

                } else {
                    errorTOThrow += "<br> SUCCESSFUL"
                }
                throw errorTOThrow;

            } catch (err) {
                // here; err is a string because we are throwing a string throw errorTOThrow, in the first example it was an object that is beacause it is object by default...so basically if we throw something, that variable will be stored in the err
                errorMessage.innerHTML = err;
                // this will chnage the innerHTML of our error message
            }
        }
    </script>