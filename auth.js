function authenticate(login, password) {
    if (login == 'login' && password === 'password') {
    	return 'You were loggin in';
    } else {
    	return 'Login is incorrect';
    }
}
